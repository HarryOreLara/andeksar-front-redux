import { ActionReducer } from '@ngrx/store';
import {
  dropdownReducer,
  DropdownState,
} from './dropdown/reducers/dropdown.reducer';
import { menuReducer, MenuState } from './menu/reducers/menu.reducer';

export interface SharedState {
  dropdown: DropdownState;
  menu: MenuState;
}

export const sharedRecuder: ActionReducer<SharedState> = (state, action) => {
  return {
    dropdown: dropdownReducer(state?.dropdown, action),
    menu: menuReducer(state?.menu, action),
  };
};
