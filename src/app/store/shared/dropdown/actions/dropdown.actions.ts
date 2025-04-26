import { createAction, props } from "@ngrx/store";
import { Estandar } from "src/app/core/class/estandar/Estandar.class";

export const listarAgenciaByDocumentoTrabajador = createAction(
    '[Agencia] Listar Agencia By Documento Trabajador',
    props<{ documento: string }>()
);


export const listarAgenciaByDocumentoTrabajadorSuccess = createAction(
    '[Agencia] Listar Agencia By Documento Trabajador Success',
    props<{ items: Estandar[] }>()
);