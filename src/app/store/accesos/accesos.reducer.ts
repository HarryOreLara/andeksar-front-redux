import { ActionReducer } from '@ngrx/store';
import { perfilReducer, PerfilState } from './perfil/reducers/perfil.reducer';

export interface AccesosState {
  perfil: PerfilState;
}

export const accesosReducer: ActionReducer<AccesosState> = (state, action) => {
  return {
    perfil: perfilReducer(state?.perfil, action),
  };
};
