import { ActivosState } from 'src/app/shared/enums';
import { Estandar } from '../../estandar/Estandar.class';
import { Piloto } from './Piloto.class';
import { Vehiculo } from './Vehiculo.class';

export class Programacion {
  id: number;
  vehiculo: Vehiculo;

  piloto: Piloto;
  copiloto: Piloto;
  estado: ActivosState;
  trayectoria: Estandar;
  origen: Estandar;
  destino: Estandar;
  fecha: Date;

  constructor(programacion: Partial<Programacion> = {}) {
    this.id = programacion.id ?? 0;
    this.vehiculo = programacion.vehiculo ?? new Vehiculo();

    this.piloto = programacion.piloto ?? new Piloto();
    this.copiloto = programacion.copiloto ?? new Piloto();
    this.estado = programacion.estado ?? ActivosState.ACTIVO;
    this.trayectoria = programacion.trayectoria ?? new Estandar();
    this.origen = programacion.origen ?? new Estandar();
    this.destino = programacion.destino ?? new Estandar();
    this.fecha = programacion.fecha ?? new Date();
  }

  static fromJson(data: any): Programacion {
    return new Programacion({
      id: data.id,
      origen: Estandar.fromJson(data.origen),
      destino: Estandar.fromJson(data.destino),
      trayectoria: Estandar.fromJson(data.trayectoria),
      vehiculo: Vehiculo.fromJson(data.vehiculo),
      piloto: Piloto.fromJson(data.piloto),
      copiloto: Piloto.fromJson(data.copiloto),
      fecha: data.fecha,
      estado: data.estado,
    });
  }

  static fromJsonUpdate(data: any): Programacion {
    return new Programacion({
      id: data.id,
      origen: Estandar.fromJson(data.origen),
      destino: Estandar.fromJson(data.destino),
      trayectoria: Estandar.fromJson(data.trayectoria),
      vehiculo: Vehiculo.fromJson(data.vehiculo),
      piloto: Piloto.fromJson(data.piloto),
      copiloto: Piloto.fromJson(data.copiloto),
      fecha: data.fecha,
    });
  }

  static toJson(programacion: Programacion): any {
    return {
      id: programacion.id,
      piloto: programacion.piloto.id,
      copiloto: programacion.copiloto.id,
      origen: programacion.origen.id,
      destino: programacion.destino.id,
      trayectoria: programacion.trayectoria.id,
      vehiculo: programacion.vehiculo.id,
      fecha: programacion.fecha,
    };
  }

  isEmpty(): boolean {
    return this.id === 0;
  }
}
