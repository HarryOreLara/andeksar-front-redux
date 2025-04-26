export class Entrega {
  idDestino: number;
  idTipoEntrega: number;
  direccionEntrega: string;

  constructor(entrega: Partial<Entrega> = {}) {
    this.idDestino = entrega.idDestino || 0;
    this.idTipoEntrega = entrega.idTipoEntrega || 0;
    this.direccionEntrega = entrega.direccionEntrega || '';
  }

  static fromJson(data: any): Entrega {
    return new Entrega({
      idDestino: data.idDestino,
      idTipoEntrega: data.idTipoEntrega,
      direccionEntrega: data.direccionEntrega
    });
  }

  static toJson(entrega: any): any {
    return {
      idDestino: entrega.idDestino,
      idTipoEntrega: entrega.idTipoEntrega,
      direccionEntrega: entrega.direccionEntrega
    };
  }

  
}
