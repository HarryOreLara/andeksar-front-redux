import { Estandar } from '../estandar/Estandar.class';
import { Cliente, Direcciones } from '../maestros';
import { DocumentoSerie } from './DocumentoSerie.class';
import { Pagador } from './Pagador.class';

export class OrdenForm {
  cabecera: Cabecera;
  remitente: Cliente;
  consignado: Cliente;
  pago: FormaPago;
  documentoSerie: DocumentoSerie;

  constructor(orden: Partial<OrdenForm> = {}) {
    this.cabecera = orden.cabecera || new Cabecera();
    this.remitente = orden.remitente || new Cliente();
    this.consignado = orden.consignado || new Cliente();
    this.pago = orden.pago || new FormaPago();
    this.documentoSerie = orden.documentoSerie || new DocumentoSerie();
  }

  static fromJson(data: any): OrdenForm {
    return new OrdenForm({
      cabecera: Cabecera.fromJson(data.cabecera),
      remitente: Cliente.fromJson(data.remitente),
      consignado: Cliente.fromJson(data.consignado),
      pago: FormaPago.fromJson(data.pago),
      documentoSerie: DocumentoSerie.fromJson(data.documentoSerie),
    });
  }

  static toJson(orden: any): any {
    return {
      cabecera: Cabecera.toJson(orden.cabecera),
      remitente: Cliente.toJson(orden.remitente),
      consignado: Cliente.toJson(orden.consignado),
      pago: FormaPago.toJson(orden.pago),
      documentoSerie: DocumentoSerie.toJson(orden.documentoSerie),
    };
  }
}

class Cabecera {
  origen: Estandar;
  destino: Estandar;
  tipoRecepcion: Estandar;
  tipoEntrega: Estandar;
  direccionRecepcion: Direcciones;
  direccionEntrega: Direcciones;

  constructor(cabecera: Partial<Cabecera> = {}) {
    this.origen = cabecera.origen || new Estandar();
    this.destino = cabecera.destino || new Estandar();
    this.tipoRecepcion = cabecera.tipoRecepcion || new Estandar();
    this.tipoEntrega = cabecera.tipoEntrega || new Estandar();
    this.direccionRecepcion = cabecera.direccionRecepcion || new Direcciones();
    this.direccionEntrega = cabecera.direccionEntrega || new Direcciones();
  }

  static fromJson(data: any): Cabecera {
    return new Cabecera({
      origen: Estandar.fromJson(data.origen),
      destino: Estandar.fromJson(data.destino),
      tipoRecepcion: Estandar.fromJson(data.tipoRecepcion),
      tipoEntrega: Estandar.fromJson(data.tipoEntrega),
      direccionRecepcion: Direcciones.fromJson(data.direccionRecepcion),
      direccionEntrega: Direcciones.fromJson(data.direccionEntrega),
    });
  }

  static toJson(cabecera: any): any {
    return {
      origen: Estandar.toJson(cabecera.origen),
      destino: Estandar.toJson(cabecera.destino),
      tipoRecepcion: Estandar.toJson(cabecera.tipoRecepcion),
      tipoEntrega: Estandar.toJson(cabecera.tipoEntrega),
      direccionRecepcion: Direcciones.toJson(cabecera.direccionRecepcion),
      direccionEntrega: Direcciones.toJson(cabecera.direccionEntrega),
    };
  }
}

class FormaPago {
  pagador: Pagador;
  formaPago: Estandar;
  codigoSeguridad: string;
  observacion: string;

  constructor(pago: Partial<FormaPago> = {}) {
    this.pagador = pago.pagador || new Pagador();
    this.formaPago = pago.formaPago || new Estandar();
    this.codigoSeguridad = pago.codigoSeguridad || '';
    this.observacion = pago.observacion || '';
  }

  static fromJson(data: any): FormaPago {
    return new FormaPago({
      pagador: Pagador.fromJson(data.pagador),
      formaPago: Estandar.fromJson(data.formaPago),
      codigoSeguridad: data.codigoSeguridad,
      observacion: data.observacion,
    });
  }

  static toJson(pago: any): any {
    return {
      pagador: Pagador.toJson(pago.pagador),
      formaPago: Estandar.toJson(pago.formaPago),
      codigoSeguridad: pago.codigoSeguridad,
      observacion: pago.observacion,
    };
  }
}

