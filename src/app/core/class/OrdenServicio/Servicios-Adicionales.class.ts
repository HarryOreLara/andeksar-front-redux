export class ServiciosAdicionales {
  uniqueId: string;
  id: number;
  descripcion: string;
  nombre: string;
  createdAt: string;
  state: string;
  value: number;

  precio: number;
  total: number;
  nroBultos: number;
  unidadMedida: number;

  constructor(serviciosAdicionales: Partial<ServiciosAdicionales> = {}) {
    this.uniqueId = serviciosAdicionales.uniqueId || '';
    this.id = serviciosAdicionales.id || 0;
    this.descripcion = serviciosAdicionales.descripcion || '';
    this.nombre = serviciosAdicionales.nombre || '';
    this.createdAt = serviciosAdicionales.createdAt || '';
    this.state = serviciosAdicionales.state || '';
    this.value = serviciosAdicionales.value || 0;

    this.precio = serviciosAdicionales.precio || 0;
    this.total = serviciosAdicionales.total || 0;
    this.nroBultos = serviciosAdicionales.nroBultos || 0;
    this.unidadMedida = serviciosAdicionales.unidadMedida || 0;
  }

  static fromJsonArray(serviciosAdicionalesJson: any[]): ServiciosAdicionales[] {
    return serviciosAdicionalesJson.map((serviciosAdicionales) =>
      ServiciosAdicionales.fromJson(serviciosAdicionales)
    );
  }

  static fromJson(serviciosAdicionalesJson: any): ServiciosAdicionales {
    return new ServiciosAdicionales({
      uniqueId: serviciosAdicionalesJson.uniqueId,
      id: serviciosAdicionalesJson.id,
      descripcion: serviciosAdicionalesJson.descripcion,
      nombre: serviciosAdicionalesJson.nombre,
      createdAt: serviciosAdicionalesJson.createdAt,
      state: serviciosAdicionalesJson.state,
      value: serviciosAdicionalesJson.value,
      precio: serviciosAdicionalesJson.precio,
      total: serviciosAdicionalesJson.total,
      nroBultos: serviciosAdicionalesJson.nroBultos,
      unidadMedida: serviciosAdicionalesJson.unidadMedida,
    });
  }

  static toJson(serviciosAdicionales: ServiciosAdicionales): any {
    return {
      uniqueId: serviciosAdicionales.uniqueId,
      id: serviciosAdicionales.id,
      descripcion: serviciosAdicionales.descripcion,
      nombre: serviciosAdicionales.nombre,
      createdAt: serviciosAdicionales.createdAt,
      state: serviciosAdicionales.state,
      value: serviciosAdicionales.value,
      precio: serviciosAdicionales.precio,
      total: serviciosAdicionales.total,
      nroBultos: serviciosAdicionales.nroBultos,
      unidadMedida: serviciosAdicionales.unidadMedida,
    };
  }

  static toJsonArray(serviciosAdicionales: ServiciosAdicionales[]): any[] {
    return serviciosAdicionales.map((serviciosAdicionales) =>
      ServiciosAdicionales.toJson(serviciosAdicionales)
    );
  }
}
