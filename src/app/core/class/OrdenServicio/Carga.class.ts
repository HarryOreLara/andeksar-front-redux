import { UnidadMedida } from '../unidad-medida/UnidadMedida.class';

export class Carga {
  id: number;
  precio: number;
  unidadMedida: UnidadMedida;
  descripcion: string;
  nroBultos: number;
  peso: number;
  observacion: string;
  total: number;
  porcentaje: number;

  constructor(carga: Partial<Carga> = {}) {
    this.id = carga.id || 0;
    this.precio = carga.precio || 0;
    this.unidadMedida = carga.unidadMedida || new UnidadMedida();
    this.descripcion = carga.descripcion || '';
    this.nroBultos = carga.nroBultos || 0;
    this.peso = carga.peso || 0;
    this.observacion = carga.observacion || '';
    this.total = carga.total || 0;
    this.porcentaje = carga.porcentaje || 0;
  }

  static fromJson(cargaJson: any): Carga {
    return new Carga({
      id: cargaJson.id,
      precio: cargaJson.precio,
      unidadMedida: UnidadMedida.fromJson(cargaJson.unidadMedida),
      descripcion: cargaJson.descripcion,
      nroBultos: cargaJson.nroBultos,
      peso: cargaJson.peso,
      observacion: cargaJson.observacion,
      total: cargaJson.total,
      porcentaje: cargaJson.porcentaje,
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
      porcentaje: carga.porcentaje,
    };
  }
}
