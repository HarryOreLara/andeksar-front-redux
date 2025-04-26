import { Carga } from '../../class/OrdenServicio';
import { UnidadMedida } from '../../class/unidad-medida/UnidadMedida.class';

export interface IObjectsCommons {
  id: number;
  precio: number;
  total: number;
  unidadMedida: UnidadMedida ;
  descripcion: string;
  estado: boolean;
  createdAt: string;
  nroBultos:number;
  porcentaje: number;
}

export type commonObjectsWithoutUnitMeasure = Omit<IObjectsCommons, 'unidadMedida' | 'estado'|'createdAt'|'porcentaje'>;



export interface IChargeEvent {
  charges: Carga[];

  priceTotalOrder: number;
}
