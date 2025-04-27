import { Estandar } from '../estandar/Estandar.class';

export class Carga {
  id: number;
  precio: number;
  unidadMedida: Estandar;
  descripcion: string;
  nroBultos: number;
  peso: number;
  observacion: string;
  total: number;
  estado: boolean = false;

  constructor(carga: Partial<Carga> = {}) {
    this.id = carga.id || 0;
    this.precio = carga.precio || 0;
    this.unidadMedida = carga.unidadMedida || new Estandar();
    this.descripcion = carga.descripcion || '';
    this.nroBultos = carga.nroBultos || 0;
    this.peso = carga.peso || 0;
    this.observacion = carga.observacion || '';
    this.total = carga.total || 0;
    this.estado = carga.estado || false;
  }


  static fromJsonArray(cargasJson: any[]): Carga[] {
    return cargasJson.map((cargaJson) => Carga.fromJson(cargaJson));
  }

  static fromJson(cargaJson: any): Carga {
    return new Carga({
      id: cargaJson.id,
      precio: cargaJson.precio,
      unidadMedida: Estandar.fromJson(cargaJson.unidadMedida),
      descripcion: cargaJson.descripcion,
      nroBultos: cargaJson.nroBultos,
      peso: cargaJson.peso,
      observacion: cargaJson.observacion,
      total: cargaJson.total,
    });
  }

  static toJson(carga: Carga): any {
    return {
      id: carga.id,
      precio: carga.precio,
      unidadMedida: carga.unidadMedida.id,
      descripcion: carga.descripcion,
      nroBultos: carga.nroBultos,
      peso: carga.peso,
      observacion: carga.observacion,
      total: carga.total,
    };
  }

  static toJsonArray(cargas: Carga[]): any[] {
    return cargas.map((carga) => Carga.toJson(carga));
  }
}
