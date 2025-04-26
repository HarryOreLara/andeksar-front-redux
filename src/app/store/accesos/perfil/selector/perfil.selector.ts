import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";



export const selectPerfilState = (state:AppState) => state.accesos.perfil;


export const selectPerfiles = createSelector(
    selectPerfilState,
    (perfilState) => perfilState
);