import { ICharge } from "./ICarga.interface";
import { IObjectsCommons } from "./IObjetosComunes.interface";

interface IRecepcion {
    idOrigen: number;
    idTipoRecepcion: number;
    direccionRecepcion: string;
}


interface IDetallesCarga {
    nroBultos: number;
    peso: number;
    precio: number;
    descripcion: string;
    observacion: string;
    id: number;
    total: number;
    unidadMedida: number;
}

interface IEntrega {
    idDestino: number;
    idTipoEntrega: number;
    direccionEntrega: string;
}

export interface INewOrdenServicio {
    idRemitente: number;
    idPersonaEnvia: number;
    idConsignado: number;
    contactos: number[];
    recepcion: IRecepcion;
    entrega: IEntrega;
    formaPago: number;
    pagador: number;
    detalleCarga: any[];
    serviciosAcionales: any[];
    observacion: string;
    detallesAdicionales: string;
    priceTotalOrder?: number;
}