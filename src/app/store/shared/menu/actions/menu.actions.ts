import { createAction, props } from '@ngrx/store';
import { IMenu } from 'src/app/core/interfaces/menu/IMenu.interface';

export const listarMenu = createAction('[Menu] Listar Menu');

export const listarMenuSucces = createAction(
  '[Menu] Listar Menu Success',
  props<{ menu: IMenu[] }>()
);

export const listarMenuError = createAction(
  '[Menu] Listar Menu Error',
  props<{ error: any }>()
);
