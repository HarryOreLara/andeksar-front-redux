import { createAction, props } from "@ngrx/store";
import { Agencia } from "src/app/core/class/agencias/agencias.class";





export const listarAgenciasSuccess = createAction(
    '[Agencia] Listar Agencias Success',
    props<{agencia:Agencia[]}>()
);