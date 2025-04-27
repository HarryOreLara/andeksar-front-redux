import { Estandar } from '../estandar/Estandar.class';


export class Cabecera {
  origen: Estandar;
  destino: Estandar;
  tipoRecepcion: Estandar;
  tipoEntrega: Estandar;
  direccionRecepcion: Estandar;
  direccionEntrega: Estandar;

  constructor(cabecera: Partial<Cabecera> = {}) {
    this.origen = cabecera.origen ?? new Estandar();
    this.destino = cabecera.destino ?? new Estandar();
    this.tipoRecepcion = cabecera.tipoRecepcion ?? new Estandar();
    this.tipoEntrega = cabecera.tipoEntrega ?? new Estandar();
    this.direccionRecepcion = cabecera.direccionRecepcion ?? new Estandar();
    this.direccionEntrega = cabecera.direccionEntrega ?? new Estandar();
  }

  static fromJson(data: any): Cabecera {
    return new Cabecera({
      origen: Estandar.fromJson(data.origen),
      destino: Estandar.fromJson(data.destino),
      tipoRecepcion: Estandar.fromJson(data.tipoRecepcion),
      tipoEntrega: Estandar.fromJson(data.tipoEntrega),
      direccionRecepcion: Estandar.fromJson(data.direccionRecepcion),
      direccionEntrega: Estandar.fromJson(data.direccionEntrega),
    });
  }

  static toJson(cabecera: any): any {
    return {
      origen: Estandar.toJson(cabecera.origen),
      destino: Estandar.toJson(cabecera.destino),
      tipoRecepcion: Estandar.toJson(cabecera.tipoRecepcion),
      tipoEntrega: Estandar.toJson(cabecera.tipoEntrega),
      direccionRecepcion: Estandar.toJson(cabecera.direccionRecepcion),
      direccionEntrega: Estandar.toJson(cabecera.direccionEntrega),
    };
  }
}
