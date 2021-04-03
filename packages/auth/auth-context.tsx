import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { setupFirebase } from '../config/firebase';

import authFetchReducer, * as authFetchTypes from './auth-fetch-reducer';
import authReducer, * as authTypes from './auth-reducer';
import { loginRequest } from './loginRequest';

interface AuthMethods {
  readonly logged: (user: authTypes.UserInfo) => void;
  readonly logout: () => void;
  readonly login: () => Promise<void>;
}

interface Props {
  readonly children: ReactElement;
}

const AuthStateCtx = createContext<authTypes.AuthState>(
  authTypes.INITIAL_STATE,
);
AuthStateCtx.displayName = 'AuthStateCtx';

const AuthMethodsCtx = createContext<AuthMethods | null>(null);
AuthStateCtx.displayName = 'AuthStateCtx';

const AuthFetchStateCtx = createContext<authFetchTypes.AuthFetchState>(
  authFetchTypes.INITIAL_STATE,
);
AuthFetchStateCtx.displayName = 'AuthFetchStateCtx';

export function AuthProvider({ children }: Props): ReactElement {
  const [authState, authDispatch] = useReducer(
    authReducer,
    authTypes.INITIAL_STATE,
  );
  const [fetchState, fetchDispatch] = useReducer(
    authFetchReducer,
    authFetchTypes.INITIAL_STATE,
  );
  const methods: AuthMethods = useMemo(
    () => ({
      login: async () => {
        fetchDispatch(authFetchTypes.login());
        try {
          await loginRequest();
          fetchDispatch(authFetchTypes.loginDone());
        } catch (error) {
          fetchDispatch(authFetchTypes.loginFail((error as Error).message));
        }
      },
      logged: (userInfo) => authDispatch(authTypes.loginSuccess(userInfo)),
      logout: () => authDispatch(authTypes.logout()),
    }),
    [authDispatch, fetchDispatch],
  );

  useEffect(() => {
    // Init firebase settings
    setupFirebase();
  }, []);

  return (
    <AuthStateCtx.Provider value={authState}>
      <AuthMethodsCtx.Provider value={methods}>
        <AuthFetchStateCtx.Provider value={fetchState}>
          {children}
        </AuthFetchStateCtx.Provider>
      </AuthMethodsCtx.Provider>
    </AuthStateCtx.Provider>
  );
}

export function useAuthState(): authTypes.AuthState {
  return useContext(AuthStateCtx);
}

export function useAuthFetchState(): authFetchTypes.AuthFetchState {
  return useContext(AuthFetchStateCtx);
}

export function useAuthMethods(): AuthMethods {
  const methods = useContext(AuthMethodsCtx);
  if (methods == null)
    throw new TypeError(`Missing AuthProvider upwards in the tree`);
  return methods;
}
