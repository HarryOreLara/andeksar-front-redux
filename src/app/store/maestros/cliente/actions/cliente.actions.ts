import { createAction, props } from '@ngrx/store';
import { Cliente } from 'src/app/core/class/maestros';

export const clienteError = createAction(
  '[Cliente] Listar Clientes Error',
  props<{ error: any }>()
);

export const listarClientes = createAction('[Cliente] Listar Clientes');

export const listarClientesSuccess = createAction(
  '[Cliente] Listar Clientes Success',
  props<{ clientes: Cliente[] }>()
);

export const obtenerCliente = createAction(
  '[Cliente] Obtener Cliente',
  props<{ id: number }>()
);

export const obtenerClienteSuccess = createAction(
  '[Cliente] Obtener Cliente Success',
  props<{ cliente: Cliente }>()
);

export const crearCliente = createAction(
  '[Cliente] Crear Cliente',
  props<{ cliente: Cliente }>()
);

export const crearClienteSuccess = createAction(
  '[Cliente] Crear Cliente Success',
  props<{ cliente: Cliente }>()
);


export const actualizarCliente = createAction(
  '[Cliente] Actualizar Cliente',
  props<{ cliente: Cliente }>()
);

export const actualizarClienteSuccess = createAction(
  '[Cliente] Actualizar Cliente Success',
  props<{ cliente: Cliente }>()
);

export const eliminarCliente = createAction(
  '[Cliente] Eliminar Cliente',
  props<{ id: number }>()
);

export const eliminarClienteSuccess = createAction(
  '[Cliente] Eliminar Cliente Success',
  props<{ id: number }>()
);