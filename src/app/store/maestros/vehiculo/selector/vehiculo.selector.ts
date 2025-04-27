import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

export const selecVehiculoState = (state: AppState) => state.maestros.vehiculo;

export const selectVehiculos = createSelector(
  selecVehiculoState,
  (vehiculoState) => vehiculoState
);
