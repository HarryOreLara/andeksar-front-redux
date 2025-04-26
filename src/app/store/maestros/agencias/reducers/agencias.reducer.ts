import { createReducer, on } from "@ngrx/store";
import { Agencia } from "src/app/core/class/agencias/agencias.class";
import {  listarAgenciasSuccess } from "../actions/agencias.actions";



export interface AgenciasState{
    agencia:Agencia[],
    loaded:boolean,
    loading:boolean,
    error:any
}



export const agenciaInitialState:AgenciasState = {
    agencia:[],
    loaded:false,
    loading:false,
    error:null
}



export const agenciasReducer = createReducer(
    agenciaInitialState,

    on(listarAgenciasSuccess,(state,{agencia})=>({
        ...state,
        loading:false,
        loaded:true,
        agencia:agencia
    }))
);