import { Estandar } from '../estandar/Estandar.class';
import { Cliente } from '../maestros';

export class SeguridadPago {
  pagador: Estandar;
  formaPago: Estandar;
  codigoSeguridad: string;
  observacion: string;

  constructor(pago: Partial<SeguridadPago> = {}) {
    this.pagador = pago.pagador ?? new Estandar();
    this.formaPago = pago.formaPago ?? new Estandar();
    this.codigoSeguridad = pago.codigoSeguridad ?? '';
    this.observacion = pago.observacion ?? '';
  }

  static fromJson(data: any): SeguridadPago {
    return new SeguridadPago({
      pagador:
        data.pagador.descripcion == 'Remitente'
          ? new Estandar({ id: 1, descripcion: 'Remitente' })
          : new Estandar({ id: 2, descripcion: 'Destinatario' }),
      formaPago: data.formaPago
        ? Estandar.fromJson(data.formaPago)
        : new Estandar(),
      codigoSeguridad: data.codigoSeguridad,
      observacion: data.observacion,
    });
  }

  static toJson(seguridadPago: SeguridadPago): any {
    return {
      pagador: seguridadPago.pagador.id,
      formaPago: seguridadPago.formaPago.id,
      codigoSeguridad: seguridadPago.codigoSeguridad,
      observacion: seguridadPago.observacion,
    };
  }

  static toJsonValidator(
    seguridadPago: SeguridadPago,
    remitente: Cliente,
    destinatario: Cliente
  ): any {
    return {
      idPagador: seguridadPago.pagador.id == 1 ? remitente.id : destinatario.id,
      idFormaPago: seguridadPago.formaPago.id ?? 0,
      codigoSeguridad: seguridadPago.codigoSeguridad,
      observacion: seguridadPago.observacion,
    };
  }
}
