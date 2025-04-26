
import { UnidadMedida } from "../../class/unidad-medida/UnidadMedida.class";

export interface ICharge{
    id:number;
    precio:number;
    unidadMedida:UnidadMedida;
    descripcion:string;
    nroBultos:number;
    peso:number;//1
}


