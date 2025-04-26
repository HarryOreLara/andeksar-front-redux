import {
  BzlinkState,
  ComprobanteState,
  TipoComprobanteState,
} from 'src/app/shared/enums';
import { Cliente } from '../maestros';
import { Estandar } from '../estandar/Estandar.class';

export class Comprobante {
  id: number;
  tipoComprobante: TipoComprobanteState;
  serie: string;
  numero: string;
  fechaEmision: Date;
  fechaVencimiento: Date;
  fechaPago: Date;
  moneda: string;
  comprobanteErrores: string;
  monto: number;
  correlativo: string;
  fechaEnvio: Date;
  estadoBzlink: BzlinkState;
  estadoComprobante: ComprobanteState;
  linkPdf:string;
  linkXml:string;
  linkCdr:string;

  idsOrdenes: number[];
  cliente: Cliente;
  
  formaPago: Estandar;

  constructor(comprobante: Partial<Comprobante> = {}) {
    this.id = comprobante.id ?? 0;
    this.tipoComprobante =
      comprobante.tipoComprobante ?? TipoComprobanteState.FE;
    this.serie = comprobante.serie ?? '';
    this.numero = comprobante.numero ?? '';
    this.fechaEmision = comprobante.fechaEmision ?? new Date();
    this.fechaVencimiento = comprobante.fechaVencimiento ?? new Date();
    this.fechaPago = comprobante.fechaPago ?? new Date();
    this.moneda = comprobante.moneda ?? '';
    this.comprobanteErrores = comprobante.comprobanteErrores ?? '';
    this.idsOrdenes = comprobante.idsOrdenes ?? [];
    this.cliente = comprobante.cliente ?? new Cliente();
    
    this.formaPago = comprobante.formaPago ?? new Estandar();

    this.monto = comprobante.monto ?? 0;
    this.correlativo = comprobante.correlativo ?? '';
    this.fechaEnvio = comprobante.fechaEnvio ?? new Date();
    this.estadoComprobante =
    comprobante.estadoComprobante ?? ComprobanteState.ANULADO;
    this.estadoBzlink = comprobante.estadoBzlink ?? BzlinkState.GENERADO;
    this.linkPdf = comprobante.linkPdf ?? '';
    this.linkXml = comprobante.linkXml ?? '';
    this.linkCdr = comprobante.linkCdr ?? '';
  }

  static fromJson(data: any): Comprobante {
    return new Comprobante({
      id: data.id,
      tipoComprobante: data.tipoComprobante,
      serie: data.serie,
      numero: data.numero,
      fechaEmision: data.fechaEmision,
      fechaVencimiento: data.fechaVencimiento,
      fechaPago: data.fechaPago,
      moneda: data.moneda,
      idsOrdenes: data.idsOrdenes,
      cliente: Cliente.fromJson(data.cliente),
      // formaPago: Estandar.fromJson(data.formaPago),
      comprobanteErrores: data.comprobanteErrores,
      monto: data.monto,
      correlativo: data.correlativo,
      fechaEnvio: data.fechaEnvio,
      estadoComprobante: data.estadoComprobante,
      estadoBzlink: data.estadoBzlink,
      linkPdf: data.linkPdf,
      linkXml: data.linkXml,
      linkCdr: data.linkCdr,
    });
  }

  static toJson(comprobante: Comprobante): any {
    return {
      id: comprobante.id,
      tipoComprobante: comprobante.tipoComprobante,
      serie: comprobante.serie,
      numero: comprobante.numero,
      fechaEmision: comprobante.fechaEmision,
      fechaVencimiento: comprobante.fechaVencimiento,
      fechaPago: comprobante.fechaPago,
      moneda: comprobante.moneda,
      idsOrdenes: comprobante.idsOrdenes,
      cliente: comprobante.cliente,
      FormaPago: comprobante.formaPago,

      monto: comprobante.monto,
      correlativo: comprobante.correlativo,
      fechaEnvio: comprobante.fechaEnvio,
      estadoComprobante: comprobante.estadoComprobante,
      estadoBzlink: comprobante.estadoBzlink,
    };
  }

  static toJsonFromCreateComprobante(comprobante: Comprobante): any {
    return {
      tipoComprobante: comprobante.tipoComprobante,
      idsOrdenes: comprobante.idsOrdenes,
      idCliente: comprobante.cliente.id,
      formaPago: comprobante.formaPago,
    };
  }
}
