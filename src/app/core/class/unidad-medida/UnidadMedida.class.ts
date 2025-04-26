export class UnidadMedida {
  id: number;
  sigla: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;

  constructor(unididadMedida: Partial<UnidadMedida> = {}) {
    this.id = unididadMedida.id || 0;
    this.sigla = unididadMedida.sigla || '';
    this.descripcion = unididadMedida.descripcion || '';
    this.estado = unididadMedida.estado || false;
    this.createdAt = unididadMedida.createdAt || new Date();
  }

  static fromJson(unidadMedidaJson: any): UnidadMedida {
    return new UnidadMedida({
      id: unidadMedidaJson.id,
      sigla: unidadMedidaJson.sigla,
      descripcion: unidadMedidaJson.descripcion,
      estado: unidadMedidaJson.estado,
      createdAt: new Date(unidadMedidaJson.createdAt),
    });
  }

  static fromJsonList(unidadMedidaJson: any[]): UnidadMedida[] {
    return unidadMedidaJson.map((unidadMedida) =>
      UnidadMedida.fromJson(unidadMedida)
    );
  }

  static toJson(unidadMedida: UnidadMedida): any {
    return {
      id: unidadMedida.id,
      sigla: unidadMedida.sigla,
      descripcion: unidadMedida.descripcion,
      estado: unidadMedida.estado,
      createdAt: unidadMedida.createdAt,
    };
  }
}
