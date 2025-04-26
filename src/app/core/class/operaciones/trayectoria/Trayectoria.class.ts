import { ActivosState } from 'src/app/shared/enums';
import { Agencia } from '../../agencias/agencias.class';

export class Trayectoria {
  id: number;
  origen: Agencia;
  destino: Agencia;
  nombre: string;
  estado: ActivosState;
  agenciasSeleccionadas: Agencia[];
  totalOficinas: number;
  totalTiempoAcumulado: number;

  constructor(trayectoria: Partial<Trayectoria> = {}) {
    this.id = trayectoria.id || 0;
    this.origen = trayectoria.origen || new Agencia();
    this.destino = trayectoria.destino || new Agencia();
    this.nombre = trayectoria.nombre || '';
    this.estado = trayectoria.estado || ActivosState.INACTIVO;
    this.agenciasSeleccionadas = trayectoria.agenciasSeleccionadas || [];
    this.totalOficinas = trayectoria.totalOficinas || 0;
    this.totalTiempoAcumulado = trayectoria.totalTiempoAcumulado || 0;
  }

  static fromJson(trayectoriaJson: any): Trayectoria {
    return new Trayectoria({
      id: trayectoriaJson.id,
      origen: Agencia.fromTrayectoriaJson(trayectoriaJson.origen),
      destino: Agencia.fromTrayectoriaJson(trayectoriaJson.destino),
      nombre: trayectoriaJson.nombre,
      estado: trayectoriaJson.estado == true ? ActivosState.ACTIVO : ActivosState.INACTIVO,
      agenciasSeleccionadas: trayectoriaJson.agenciasSeleccionadas,
      totalTiempoAcumulado: trayectoriaJson.totalTiempoAcumulado,
      totalOficinas: trayectoriaJson.totalOficinas,
    });
  }

  static toJson(trayectoria: Trayectoria): any {
    return {
      idOrigen: trayectoria.origen.id,
      idDestino: trayectoria.destino.id,
      estado: trayectoria.estado,
    };
  }

  static toJsonCreate(trayectoria: Trayectoria): any {
    return {
      id: trayectoria.id,
      origen: trayectoria.origen.id,
      destino: trayectoria.destino.id,
      nombre: trayectoria.nombre,

      agenciasSeleccionadas: trayectoria.agenciasSeleccionadas.map(
        (agencia) => {
          return {
            id: agencia.id,
            trayectoriaTipo: agencia.trayectoriaTipo,
            orden: agencia.orden,
          };
        }
      ),
    };
  }

  isEmpty(): boolean {
    return (
      this.id === 0
    );
  }
}
