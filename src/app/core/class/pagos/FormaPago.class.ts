import { ActivosState } from 'src/app/shared/enums';

export class FormaPago {
  id: number;
  nombre: string;
  descripcion: string;
  estado: ActivosState;

  constructor(formaPago: Partial<FormaPago> = {}) {
    this.id = formaPago.id ?? 0;
    this.descripcion = formaPago.descripcion ?? '';
    this.nombre = formaPago.nombre ?? '';
    this.estado = formaPago.estado ?? ActivosState.ACTIVO;
  }

  static fromJson(data: any): FormaPago {
    return new FormaPago({
      id: data.id,
      descripcion: data.descripcion,
      nombre: data.nombre,
      estado: data.estado,
    });
  }

  static toJson(formaPago: any): any {
    return {
      id: formaPago.id,
      descripcion: formaPago.descripcion,
      nombre: formaPago.nombre,
      estado: formaPago.estado,
    };
  }
}
