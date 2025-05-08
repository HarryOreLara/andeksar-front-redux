import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

export const selectClienteState = (state: AppState) => state.maestros.cliente;

export const selectClientes = createSelector(
  selectClienteState,
  (clienteState) => clienteState
);
