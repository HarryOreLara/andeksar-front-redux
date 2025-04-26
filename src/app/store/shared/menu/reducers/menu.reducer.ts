import { createReducer, on } from '@ngrx/store';
import { IMenu } from 'src/app/core/interfaces/menu/IMenu.interface';
import {
  listarMenu,
  listarMenuError,
  listarMenuSucces,
} from '../actions/menu.actions';

export interface MenuState {
  menus: IMenu[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const menuInitialState: MenuState = {
  menus: [],
  loaded: false,
  loading: false,
  error: null,
};

export const menuReducer = createReducer(
  menuInitialState,
  on(listarMenu, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    error: null,
  })),
  on(listarMenuSucces, (state, { menu }) => ({
    ...state,
    menus: Array.isArray(menu) ? [...menu] : [],
    loaded: true,
    loading: false,
    error: null,
  })),
  on(listarMenuError, (state, { error }) => ({
    ...state,
    loaded: true,
    loading: false,
    error: error,
  }))
);
