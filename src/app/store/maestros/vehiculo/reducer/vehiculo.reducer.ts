import { createReducer, on } from '@ngrx/store';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import {
  listarVehiculos,
  listarVehiculosSuccess,
  vehiculoerror,
} from '../actions/vehiculo.actions';

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

export const vehiculoReducer = createReducer(
  vehiculoInitialState,
  on(listarVehiculos, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      error: null,
    };
  }),
  on(listarVehiculosSuccess, (state, { vehiculos }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      vehiculos: vehiculos,
    };
  }),
  on(vehiculoerror, (state, { error }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      error: error,
    };
  })
);
