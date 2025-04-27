import { Estandar } from '../estandar/Estandar.class';

export class Ubicacion {
  lugar: Estandar;
  tipo: Estandar;
  direccion: Estandar;

  constructor(ubicacion: Partial<Ubicacion> = {}) {
    this.lugar = ubicacion.lugar ?? new Estandar();
    this.tipo = ubicacion.tipo ?? new Estandar();
    this.direccion = ubicacion.direccion ?? new Estandar();
  }

  static fromJson(data: any): Ubicacion {

    return new Ubicacion({
      lugar: data.lugar ? Estandar.fromJson(data.lugar) : new Estandar(),
      tipo: data.tipo ?  Estandar.fromJson(data.tipo) : new Estandar(),
      direccion: data.direccion ?   Estandar.fromJson(data.direccion) : new Estandar(),
    });
  }

  static toJson(ubicacion: any): any {
    return {
      idLugar: ubicacion.lugar.id,
      idTipo: ubicacion.tipo.id,
      idDireccion: ubicacion.direccion.id,
    };
  }
}
