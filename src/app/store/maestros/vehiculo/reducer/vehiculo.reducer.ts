import { createReducer } from '@ngrx/store';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';

export interface VehiculoState {
  vehiculo: Vehiculo;
  vehiculos: Vehiculo[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const vehiculoInitialState: VehiculoState = {
  vehiculo: new Vehiculo(),
  vehiculos: [],
  loaded: false,
  loading: false,
  error: null,
};

export const vehiculoReducer = createReducer(vehiculoInitialState);
