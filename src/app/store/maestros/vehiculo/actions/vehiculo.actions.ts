import { createAction, props } from '@ngrx/store';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';

export const vehiculoerror = createAction(
  '[Vehiculo] Listar Vehiculos Error',
  props<{ error: any }>()
);

export const listarVehiculos = createAction('[Vehiculo] Listar Vehiculos');

export const listarVehiculosSuccess = createAction(
  '[Vehiculo] Listar Vehiculos Success',
  props<{ vehiculos: Vehiculo[] }>()
);

export const obtenerVehiculo = createAction(
  '[Vehiculo] Obtener Vehiculo',
  props<{ id: number }>()
);

export const obtenerVehiculoSuccess = createAction(
  '[Vehiculo] Obtener Vehiculo Success',
  props<{ vehiculo: Vehiculo }>()
);

export const crearVehiculo = createAction(
  '[Vehiculo] Crear Vehiculo',
  props<{ vehiculo: Vehiculo }>()
);

export const crearVehiculoSuccess = createAction(
  '[Vehiculo] Crear Vehiculo Success',
  props<{ vehiculo: Vehiculo }>()
);

export const actualizarVehiculo = createAction(
  '[Vehiculo] Actualizar Vehiculo',
  props<{ vehiculo: Vehiculo }>()
);

export const actualizarVehiculoSuccess = createAction(
  '[Vehiculo] Actualizar Vehiculo Success',
  props<{ vehiculo: Vehiculo }>()
);

export const eliminarVehiculo = createAction(
  '[Vehiculo] Eliminar Vehiculo',
  props<{ id: number }>()
);

export const eliminarVehiculoSuccess = createAction(
  '[Vehiculo] Eliminar Vehiculo Success',
  props<{ data: boolean }>()
);
