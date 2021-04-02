import { createAction, createReducer } from '@reduxjs/toolkit';

export type Status = 'idle' | 'loading' | 'done' | 'fail';

export interface AuthFetchState {
  readonly status: Status;
  readonly error: string | null;
}

export const INITIAL_STATE: AuthFetchState = {
  error: null,
  status: 'idle',
};

export const login = createAction('fetch-login');
export const loginDone = createAction('fetch-login-done');
export const loginFail = createAction<string>('fetch-login-fail');

const authFetchReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(login, () => ({
      error: null,
      status: 'loading',
    }))
    .addCase(loginFail, (_, action) => ({
      error: action.payload,
      status: 'fail',
    }))
    .addCase(loginDone, () => ({
      error: null,
      status: 'done',
    })),
);

export default authFetchReducer;
