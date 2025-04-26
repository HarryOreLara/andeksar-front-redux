import { createAction, props } from '@ngrx/store';
import { Auth, AuthToken } from 'src/app/core/class/auth/Auth.class';

export const login = createAction('[Auth] Login', props<{ auth: Auth }>());

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ authToken: AuthToken }>()
);

export const loginError = createAction(
  '[Auth] Login Error',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutError = createAction(
  '[Auth] Logout Error',
  props<{ error: any }>()
);
