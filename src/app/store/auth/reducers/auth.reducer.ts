import { createReducer, on } from '@ngrx/store';
import { Auth, AuthToken } from 'src/app/core/class/auth/Auth.class';
import {
  login,
  loginError,
  loginSuccess,
  logout,
} from '../actions/auth.actions';

export interface AuthState {
  auth: Auth;
  authToken: AuthToken;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const authInitialState: AuthState = {
  auth: new Auth(),
  authToken: new AuthToken(),
  loaded: false,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  authInitialState,
  on(login, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(loginSuccess, (state, { authToken }) => ({
    ...state,
    loading: false,
    loaded: true,
    authToken: { ...authToken },
    error: null,
  })),
  on(loginError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { ...error },
  })),
  // on(logout, (state) => ({
  //   ...state,
  //   loading: true,
  //   loaded: false,
  //   error: null,
  // })),
  // on(loginSuccess, (state) => ({
  //   ...state,
  //   loading: false,
  //   loaded: true,
  //   authToken: new AuthToken(),
  //   error: null,
  // })),
  // on(loginError, (state, { error }) => ({
  //   ...state,
  //   loading: false,
  //   loaded: false,
  //   error: { ...error },
  // }))
);
