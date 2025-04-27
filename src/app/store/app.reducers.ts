import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './auth/reducers/auth.reducer';
import { sharedRecuder, SharedState } from './shared/shared.reducer';
import { accesosReducer, AccesosState } from './accesos/accesos.reducer';
import { maestrosReducer, MaestrosState } from './maestros/maestros.reducer';

export interface AppState {
  auth: AuthState;
  accesos:AccesosState;
  shared:SharedState;
  maestros:MaestrosState;
}

export const appRecuders: ActionReducerMap<AppState> = {
  auth: authReducer,
  accesos: accesosReducer,
  shared:sharedRecuder,
  maestros: maestrosReducer,
};