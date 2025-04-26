import { IDepartamento, ITypeDocument } from '../interfaces';

export interface ICliente {
  id: number;
  departamento: IDepartamento;
  tipoDocumento: ITypeDocument;
  documento: string;
  nombre: string;
  apellidos: string;
  nombreCompleto: string;
  razonSocial:string;
  ubigeo: string;
  telefono: string;
  correo: string;
  contacto: string;
  direccion: string;
  activo: boolean;
  credito:boolean;
}


export interface IClienteNoDeseado{
  activo:boolean;
  tipoDocumento:ITypeDocument;
  id:number;
  documento:string;
  nombre:string;
  idtipoDocumento:1;
  observacion:string;
}

