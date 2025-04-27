import { createReducer } from '@ngrx/store';
import { Cliente } from 'src/app/core/class/maestros';

export interface ClienteState {
  clientes: Cliente[];
  cliente: Cliente;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const clienteInitialState: ClienteState = {
  clientes: [],
  cliente: new Cliente(),
  loaded: false,
  loading: false,
  error: null,
};



export const clienteReducer = createReducer(clienteInitialState);
