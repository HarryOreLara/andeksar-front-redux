import { Agencia } from '../../agencias/agencias.class';

export class BuscarProgramacion {
  id?: number;
  origen: Agencia;
  destino: Agencia;
  fecha: String;

  constructor(buscarProgramacion: Partial<BuscarProgramacion> = {}) {
    this.id = buscarProgramacion.id ?? 0;
    this.origen = buscarProgramacion.origen ?? new Agencia();
    this.destino = buscarProgramacion.destino ?? new Agencia();
    this.fecha = buscarProgramacion.fecha ?? '';

  }

  static fromJson(
    buscarProgramacionJson: BuscarProgramacion
  ): BuscarProgramacion {
    return new BuscarProgramacion({
      origen: Agencia.fromJson(buscarProgramacionJson.origen),
      destino: Agencia.fromJson(buscarProgramacionJson.destino),
      fecha: buscarProgramacionJson.fecha,
    });
  }

  static toJson(buscarProgramacion: BuscarProgramacion): any {
    return {
      origen:buscarProgramacion.origen.id,
      destino: buscarProgramacion.destino.id,
      fecha: buscarProgramacion.fecha,
    };
  }




  static ordenProgramacionToJson(buscarProgramacion: BuscarProgramacion): any {
    return {
      idOrigen:buscarProgramacion.origen.id,
      idDestino: buscarProgramacion.destino.id,
      id: buscarProgramacion.id,
    };
  }

}
