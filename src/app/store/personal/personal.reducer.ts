import { ActionReducer } from "@ngrx/store"
import { trabajadorReducer, TrabajadorState } from "./trabajador/reducer/trabajador.reducer"


export interface PersonalState{
    trabajador:TrabajadorState
}

export const personalReducer: ActionReducer<PersonalState> = (state, action) => {
    return {
        trabajador:trabajadorReducer(state?.trabajador, action)
    }
}