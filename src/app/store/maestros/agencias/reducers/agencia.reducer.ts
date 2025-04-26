import { Agencia } from "src/app/core/class/agencias/agencias.class";



export interface AgenciaState{
    agencia:Agencia,
    loaded:boolean,
    loading:boolean,
    error:any
}