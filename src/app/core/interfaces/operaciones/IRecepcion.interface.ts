export class Recepcion {
  idOrigen: number;
  idTipoRecepcion: number;
  direccionRecepcion: string;


  constructor(recepcion: Partial<Recepcion> = {}) {
    this.idOrigen = recepcion.idOrigen || 0;
    this.idTipoRecepcion = recepcion.idTipoRecepcion || 0;
    this.direccionRecepcion = recepcion.direccionRecepcion || '';
  }

  static fromJson(data: any): Recepcion {
    return new Recepcion({
      idOrigen: data.idOrigen,
      idTipoRecepcion: data.idTipoRecepcion,
      direccionRecepcion: data.direccionRecepcion
    });
  }

  static toJson(recepcion: any): any {
    return {
      idOrigen: recepcion.idOrigen,
      idTipoRecepcion: recepcion.idTipoRecepcion,
      direccionRecepcion: recepcion.direccionRecepcion
    };
  }

  
}
