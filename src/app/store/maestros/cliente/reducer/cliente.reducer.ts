import { createReducer, on } from '@ngrx/store';
import { Cliente } from 'src/app/core/class/maestros';
import {
  actualizarCliente,
  actualizarClienteSuccess,
  listarClientes,
  listarClientesSuccess,
  obtenerCliente,
  obtenerClienteSuccess,
} from '../actions/cliente.actions';

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

export const clienteReducer = createReducer(
  clienteInitialState,
  on(listarClientes, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      error: null,
    };
  }),
  on(listarClientesSuccess, (state, { clientes }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      clientes: clientes,
    };
  }),
  on(actualizarCliente, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      error: null,
    };
  }),
  on(actualizarClienteSuccess, (state, { cliente }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      cliente: cliente,
    };
  }),
  on(obtenerCliente, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      error: null,
    };
  }),
  on(obtenerClienteSuccess, (state, { cliente }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      cliente: cliente,
    };
  })
);
