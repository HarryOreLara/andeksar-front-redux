import { createReducer, on } from '@ngrx/store';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import {
  actualizarVehiculo,
  actualizarVehiculoSuccess,
  crearVehiculo,
  crearVehiculoSuccess,
  listarVehiculos,
  listarVehiculosSuccess,
  obtenerVehiculo,
  obtenerVehiculoSuccess,
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
  }),
  on(obtenerVehiculo, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      error: null,
    };
  }),
  on(obtenerVehiculoSuccess, (state, { vehiculo }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      vehiculo: vehiculo,
    };
  }),
  on(crearVehiculo, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      error: null,
    };
  }),
  on(crearVehiculoSuccess, (state, { vehiculo }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      vehiculo: vehiculo,
      vehiculos: [...state.vehiculos, vehiculo],
    };
  }),
  on(actualizarVehiculo, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      error: null,
    };
  }),
  on(actualizarVehiculoSuccess, (state, { vehiculo }) => {
    const vehiculos = state.vehiculos.map((v) =>
      v.id === vehiculo.id ? { ...vehiculo } : v
    );
    return {
      ...state,
      loading: false,
      loaded: true,
      vehiculos: [...vehiculos],
      error: null,
    };
  })
);
