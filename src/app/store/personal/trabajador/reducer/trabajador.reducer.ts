import { createReducer } from '@ngrx/store';
import { Trabajador } from 'src/app/core/class/personal/trabajador/Trabajador.class';

export interface TrabajadorState {
  trabajador: Trabajador;
  trabajadores: Trabajador[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const trabajadorInitialState: TrabajadorState = {
  trabajador: new Trabajador(),
  trabajadores: [],
  loaded: false,
  loading: false,
  error: null,
};

export const trabajadorReducer = createReducer(trabajadorInitialState);
