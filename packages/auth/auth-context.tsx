import { useRouter } from 'next/dist/client/router';
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getUserProfile, validateUser, makeLogout } from '../api/strapi';
import { UserProfile } from '../entities/types';

interface AuthMethods {
  readonly logout: () => void;
  readonly login: (token: string) => Promise<void>;
}

interface AuthState {
  readonly isLogged: boolean;
  readonly isLoading: boolean;
  readonly userProfile: UserProfile | null;
}

interface Props {
  readonly children: ReactNode;
}

const publicRoutes = ['/', '/login'];

const AuthStateCtx = createContext<AuthState>({
  isLogged: false,
  isLoading: false,
  userProfile: null,
});
AuthStateCtx.displayName = 'AuthStateCtx';

function missingProviderError() {
  throw TypeError('Missing AuthProvider upwards in the tree');
}
const AuthMethodsCtx = createContext<AuthMethods>({
  login: () => new Promise(missingProviderError),
  logout: missingProviderError,
});
AuthMethodsCtx.displayName = 'AuthMethodsCtx';

type Status = 'idle' | 'loading' | 'fetched';

export function AuthProvider({ children }: Props): ReactElement {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [fetchStatus, setFetchStatus] = useState<Status>('idle');
  const router = useRouter();
  const methods: AuthMethods = {
    login: async (token: string) => {
      setFetchStatus('loading');
      try {
        await validateUser(token);
        const userProfileFetched = getUserProfile();
        setUserProfile(userProfileFetched);
        setFetchStatus('fetched');
      } catch (error) {
        // TODO: Notify about error in another package
        setFetchStatus('fetched');
      }
    },
    logout: () => {
      setUserProfile(null);
      makeLogout();
    },
  };

  const states: AuthState = useMemo(
    () => ({
      isLogged: userProfile != null,
      isLoading: fetchStatus === 'loading',
      userProfile,
    }),
    [fetchStatus, userProfile],
  );

  useEffect(() => {
    const user = getUserProfile();
    setUserProfile(user);

    if (!publicRoutes.includes(router.pathname) && userProfile == null)
      router.replace('/login');
  }, []);

  return (
    <AuthStateCtx.Provider value={states}>
      <AuthMethodsCtx.Provider value={methods}>
        {children}
      </AuthMethodsCtx.Provider>
    </AuthStateCtx.Provider>
  );
}

export function useAuthState(): AuthState {
  return useContext(AuthStateCtx);
}

export function useAuthMethods(): AuthMethods {
  return useContext(AuthMethodsCtx);
}
