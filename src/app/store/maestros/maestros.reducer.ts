import { ActionReducer } from '@ngrx/store';
import { vehiculoReducer, VehiculoState } from './vehiculo/reducer/vehiculo.reducer';
import { agenciaReducer, AgenciasState } from './agencias/reducers/agencias.reducer';
import { clienteReducer, ClienteState } from './cliente/reducer/cliente.reducer';
import { metodoPagoReducer, MetodoPagoState } from './metodo-pago/reducer/metodo-pago.reducer';

export interface MaestrosState {
  vehiculo: VehiculoState;
  agencia:AgenciasState;
  cliente:ClienteState;
  metodoPago:MetodoPagoState;
}

export const maestrosReducer: ActionReducer<MaestrosState> = (state, action) => {
  return {
    vehiculo: vehiculoReducer(state?.vehiculo, action),
    agencia: agenciaReducer(state?.agencia, action),
    cliente: clienteReducer(state?.cliente, action),
    metodoPago: metodoPagoReducer(state?.metodoPago, action),
  };
};
