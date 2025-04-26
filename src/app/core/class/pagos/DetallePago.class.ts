import { Estandar } from '../estandar/Estandar.class';
import { Cliente } from '../maestros/Cliente.class';

export class DetallePago {
  id: number;
  idOrden: number;
  idCaja: number;
  fecha: string;
  importe: number;
  metodoPago: Estandar;
  pagante: Cliente;
  usuario: string;
  nroOperacion: string;
  fechaOperacion: string;

  constructor(detallePago: Partial<DetallePago> = {}) {
    this.id = detallePago.id ?? 0;
    this.idOrden = detallePago.idOrden ?? 0;
    this.idCaja = detallePago.idCaja ?? 0;
    this.fecha = detallePago.fecha ?? '';
    this.importe = detallePago.importe ?? 0;
    this.metodoPago = detallePago.metodoPago ?? new Estandar();
    this.pagante = detallePago.pagante ?? new Cliente();
    this.usuario = detallePago.usuario ?? '';
    this.nroOperacion = detallePago.nroOperacion ?? '';
    this.fechaOperacion = detallePago.fechaOperacion ?? new Date().toISOString();
  }

  static fromJson(data: any): DetallePago {
    return new DetallePago({
      id: data.id,
      idOrden: data.idOrden,
      idCaja: data.idCaja,
      fecha: data.fecha,
      importe: data.importe,
      metodoPago: Estandar.fromJson(data.metodoPago),
      pagante: Cliente.fromJson(data.pagante),
      usuario: data.usuario,
      nroOperacion: data.nroOperacion,
      fechaOperacion: data.fechaOperacion,
    });
  }

  static toJson(detallePago: any): any {
    return {
      id: detallePago.id,
      idOrden: detallePago.idOrden,
      idCaja: detallePago.idCaja,
      fecha: detallePago.fecha,
      importe: detallePago.importe,
      metodoPago: Estandar.toJson(detallePago.metodoPago),
      pagante: detallePago.pagante,
      usuario: detallePago.usuario,
      nroOperacion: detallePago.nroOperacion,
      fechaOperacion: detallePago.fechaOperacion || new Date().toISOString(),
    };
  }
}
