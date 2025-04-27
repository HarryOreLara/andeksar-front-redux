import { createReducer, on } from '@ngrx/store';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import {
  listarPerfiles,
  perfilError,
  listarPerfilesSuccess,
  obtenerPerfil,
  obtenerPerfilSuccess,
  crearPerfil,
  crearPerfilSuccess,
  actualizarPerfil,
  actualizarPerfilSuccess,
} from '../actions/perfil.actions';

export interface PerfilState {
  perfil: Estandar;
  perfiles: Estandar[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const perfilInitialState: PerfilState = {
  perfil: new Estandar(),
  perfiles: [],
  loaded: false,
  loading: false,
  error: null,
};

export const perfilReducer = createReducer(
  perfilInitialState,
  on(listarPerfiles, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    error: null,
  })),
  on(listarPerfilesSuccess, (state, { perfiles }) => ({
    ...state,
    perfiles: [...perfiles],
    loaded: true,
    loading: false,
    error: null,
  })),
  on(perfilError, (state, { error }) => ({
    ...state,
    loaded: true,
    loading: false,
    error: error,
  })),
  on(obtenerPerfil, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    error: null,
  })),
  on(obtenerPerfilSuccess, (state, { perfil }) => ({
    ...state,
    perfil: { ...perfil },
    loaded: true,
    loading: false,
    error: null,
  })),
  on(crearPerfil, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    error: null,
  })),
  on(crearPerfilSuccess, (state, { perfil }) => ({
    ...state,
    perfiles: [...state.perfiles, perfil],
    loaded: true,
    loading: false,
    error: null,
  })),
  on(actualizarPerfil, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    error: null,
  })),
  on(actualizarPerfilSuccess, (state, { perfil }) => {
    const perfiles = state.perfiles.map((p) =>
      p.id === perfil.id ? { ...perfil } : p
    );
    return {
      ...state,
      perfiles: [...perfiles],
      loaded: true,
      loading: false,
      error: null,
    };
  })
);
