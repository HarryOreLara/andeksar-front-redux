import { createReducer, on } from '@ngrx/store';
import { Agencia } from 'src/app/core/class/agencias/agencias.class';

export interface AgenciasState {
  agencias: Agencia[];
  agencia: Agencia;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const agenciaInitialState: AgenciasState = {
  agencias: [],
  agencia: new Agencia(),
  loaded: false,
  loading: false,
  error: null,
};

export const agenciaReducer = createReducer(agenciaInitialState);
