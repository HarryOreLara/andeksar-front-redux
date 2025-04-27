import { createAction, props } from '@ngrx/store';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';

export const listarPerfiles = createAction('[Perfil] Listar Perfiles');

export const listarPerfilesSuccess = createAction(
  '[Perfil] Listar Perfiles Success',
  props<{ perfiles: Estandar[] }>()
);

export const perfilError = createAction(
  '[Perfil] Listar Perfiles Error',
  (error: any) => ({ error })
);


export const obtenerPerfil = createAction(
  '[Perfil] Obtener Perfil',
  props<{ id: number }>()
)

export const obtenerPerfilSuccess = createAction(
  '[Perfil] Obtener Perfil Success',
  props<{ perfil: Estandar }>()
)


export const crearPerfil = createAction(
  '[Perfil] Crear Perfil',
  props<{ perfil: Estandar }>()
);

export const crearPerfilSuccess = createAction(
  '[Perfil] Crear Perfil Success',
  props<{ perfil: Estandar }>()
);


export const actualizarPerfil = createAction(
  '[Perfil] Actualizar Perfil',
  props<{ perfil: Estandar }>()
)

export const actualizarPerfilSuccess = createAction(
  '[Perfil] Actualizar Perfil Success',
  props<{ perfil: Estandar }>()
)