import { createReducer } from '@ngrx/store';
import { MetodoPago } from 'src/app/core/class/pagos/MetodoPago.class';

export interface MetodoPagoState {
  metodosPago: MetodoPago[];
  metodoPago: MetodoPago;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const metodoPagoInitialState: MetodoPagoState = {
  metodosPago: [],
  metodoPago: new MetodoPago(),
  loaded: false,
  loading: false,
  error: null,
};



export const metodoPagoReducer = createReducer(metodoPagoInitialState);
