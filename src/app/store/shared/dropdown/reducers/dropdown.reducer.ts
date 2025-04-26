import { createReducer, on } from "@ngrx/store";
import { Estandar } from "src/app/core/class/estandar/Estandar.class";
import { listarAgenciaByDocumentoTrabajador, listarAgenciaByDocumentoTrabajadorSuccess } from "../actions/dropdown.actions";




export interface DropdownState {
    items: Estandar[];
    loaded: boolean;
    loading: boolean;
    error: any;
}



export const dropdownInitialState: DropdownState = {
    items: [],
    loaded: false,
    loading: false,
    error: null
}



export const dropdownReducer = createReducer(
    dropdownInitialState,
    on(listarAgenciaByDocumentoTrabajador, (state,) => ({
        ...state,
        loaded: true,
        loading: false,
        error: null
    })),
    on(listarAgenciaByDocumentoTrabajadorSuccess, (state, { items }) => ({
        ...state,
        items: [...items],
        loaded: false,
        loading: false,
        error: null
    }))
)