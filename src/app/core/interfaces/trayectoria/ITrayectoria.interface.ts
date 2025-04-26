import { Agencia } from "../../class/agencias/agencias.class";

export interface Itrajectory {//Solo es el objeto que recibe la API, no es para enviar
  id: number;
  nombre: string;
  origen: Agencia;
  destino: Agencia;
  totalTiempoAcumulado: number;
  totalOficinas: number;
  orientacion: number;
  estado:boolean
  detalle: IDetailAgencyTrajectory[];
}

export interface INewTrajectory {
  agencia: Agencia;
  viaje: string;
  estiba: string;
  isFixed?: boolean;
  isUpdating?: boolean;
  isRemovable?: boolean;
  orientacion: string;
  trayectoriaTipo:number
}


export interface IDetailAgencyTrajectory {
  id: number;
  orden: number;
  pasaPorIdSucursalVenta: any;
  tiempoLlegada: string;
  tiempoEstibaDesestiba:string;
  totalTiempoAcumulado: number;
  trayectoriaTipo:number
}


