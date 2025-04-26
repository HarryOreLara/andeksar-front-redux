import { ActivosState } from "src/app/shared/enums";

export class MetodoPago {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  cuentaBanco: string;
  estado: ActivosState;

  constructor(metodoPago: Partial<MetodoPago> = {}) {
    this.id = metodoPago.id ?? 0;
    this.descripcion = metodoPago.descripcion ?? '';
    this.nombre = metodoPago.nombre ?? '';
    this.cuentaBanco = metodoPago.cuentaBanco ?? '';
    this.icono = metodoPago.icono ?? '';
    this.estado = metodoPago.estado ?? ActivosState.ACTIVO;
  }

  static fromJson(data: any): MetodoPago {
    return new MetodoPago({
      id: data.id,
      descripcion: data.descripcion,
      nombre: data.nombre,
      cuentaBanco: data.cuentaBanco,
      icono: data.icono,
      estado: data.estado == true ? ActivosState.ACTIVO : ActivosState.INACTIVO,
    });
  }

  static toJson(metodoPago: any): any {
    return {
      id: metodoPago.id,
      descripcion: metodoPago.descripcion,
      nombre: metodoPago.nombre,
      icono: metodoPago.icono,
      cuentaBanco: metodoPago.cuentaBanco,
      estado: metodoPago.estado == ActivosState.ACTIVO ? true : false,
    };
  }
}
