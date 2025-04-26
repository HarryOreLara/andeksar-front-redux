import { CrudState } from 'src/app/shared/enums';
import { Cliente } from '../maestros/Cliente.class';
import { DetallePago } from './DetallePago.class';

export class Pago {
  id: number;
  guiaRemitente: string;
  guia: string;
  remitente: Cliente;
  destinatario: Cliente;
  precio: number;
  deudaActual: number;
  detallePago: DetallePago[];
  state: CrudState;

  constructor(pago: Partial<Pago> = {}) {
    this.id = pago.id || 0;
    this.guiaRemitente = pago.guiaRemitente || '';
    this.guia = pago.guia || '';
    this.remitente = pago.remitente || new Cliente();
    this.destinatario = pago.destinatario || new Cliente();
    this.precio = pago.precio || 0;
    this.deudaActual = pago.deudaActual || 0;
    this.detallePago = pago.detallePago || [];
    this.state = pago.state || CrudState.PENDING;
  }

  static fromJson(data: any): Pago {
    return new Pago({
      id: data.id,
      guiaRemitente: data.guiaRemitente,
      guia: data.guia,
      remitente:
        Cliente.fromJson(data.remitente) || new Cliente(),
        destinatario: Cliente.fromJson(data.destinatario) || new Cliente(),
      precio: data.precio,
      deudaActual: data.deudaActual,
      detallePago: Array.isArray(data.detallePago)
        ? data.detallePago.map((detalle: any) => DetallePago.fromJson(detalle))
        : [],
      state: CrudState.CREATE,
    });
  }



  static fromJsonToApi(data: any): Pago {
    return new Pago({
      id: data.idOrden as number,
      guiaRemitente: data.guiaRemitente as string,
      guia: data.guia as string,
      remitente:
        Cliente.fromJson(data.remitente),
      destinatario: Cliente.fromJson(data.destinatario) ,
      precio: data.importeOrden,
      deudaActual: data.deudaOrden,
      detallePago: Array.isArray(data.detallePago)
        ? data.detallePago.map((detalle: any) => DetallePago.fromJson(detalle))
        : [],
      state: CrudState.UPDATE,
    });
  }



  static toJson(pago: any): any {
    return {
      id: pago.id,
      guiaRemitente: pago.guiaRemitente,
      guia: pago.guia,
      remitente: pago.remitente,
      destinatario: pago.destinatario,
      precio: pago.precio,
      deudaActual: pago.deudaActual,
      detallePago: pago.detallePago.map((detalle: any) =>
        DetallePago.toJson(detalle)
      ),
    };
  }
}
