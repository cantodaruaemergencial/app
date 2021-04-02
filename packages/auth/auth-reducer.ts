import { createAction, createReducer } from '@reduxjs/toolkit';

export interface UserInfo {
  readonly authToken: string;
  readonly displayName: string;
}

export interface AuthState {
  readonly isLogged: boolean;
  readonly userInfo: UserInfo | null;
}

export const INITIAL_STATE: AuthState = {
  isLogged: false,
  userInfo: null,
};

export const loginSuccess = createAction<UserInfo>('loginSuccess');
export const logout = createAction('logout');

const authReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(loginSuccess, (_, action) => ({
      isLogged: true,
      userInfo: action.payload,
    }))
    .addCase(logout, () => ({
      isLogged: false,
      userInfo: null,
    })),
);

export default authReducer;
