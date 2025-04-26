import { ActivosState, TrayectoriaState } from 'src/app/shared/enums';
import { Estandar } from '../estandar/Estandar.class';

export class Agencia {
  id: number;
  nombre: string;
  direccion: string;
  horarioInicio: Date;
  horarioTermino: Date;
  departamento: Estandar;
  provincia: Estandar;
  activo: ActivosState;
  idTrayectoria: number;
  viaje: string;
  estiba: string;
  orden: number;
  trayectoriaTipo: TrayectoriaState;

  constructor(agencia: Partial<Agencia> = {}) {
    this.id = agencia.id ?? 0;
    this.idTrayectoria = agencia.idTrayectoria ?? 0;
    this.departamento = agencia.departamento ?? new Estandar();
    this.provincia = agencia.provincia ?? new Estandar();
    this.nombre = agencia.nombre ?? '';
    this.horarioInicio = agencia.horarioInicio ?? new Date();
    this.horarioTermino = agencia.horarioTermino ?? new Date();
    this.direccion = agencia.direccion ?? '';
    this.activo = agencia.activo ?? ActivosState.ACTIVO;
    this.viaje = agencia.viaje ?? '';
    this.estiba = agencia.estiba ?? '';
    this.orden = agencia.orden ?? 0;
    this.trayectoriaTipo =
      agencia.trayectoriaTipo ?? TrayectoriaState.INTERMEDIO;
  }

  static fromJson(agenciaJson: any): Agencia {
    return new Agencia({
      id: agenciaJson.id,
      idTrayectoria: agenciaJson.idTrayectoria,
      nombre: agenciaJson.nombre,
      horarioInicio: agenciaJson.horarioInicio,
      horarioTermino: agenciaJson.horarioTermino,
      direccion: agenciaJson.direccion,
      departamento: Estandar.fromJson(agenciaJson.departamento),
      provincia: Estandar.fromJson(agenciaJson.provincia),
      activo: agenciaJson.activo ? ActivosState.ACTIVO : ActivosState.INACTIVO,
    });
  }

  static fromTrayectoriaJson(agencia: any): Agencia {
    return new Agencia({
      id: agencia.id,
      idTrayectoria: agencia.idTrayectoria,
      nombre: agencia.nombre,
      horarioInicio: agencia.horarioInicio,
      horarioTermino: agencia.horarioTermino,
      direccion: agencia.direccion,
      activo: agencia.activo ? ActivosState.ACTIVO : ActivosState.INACTIVO,
    });
  }

  static toJson(agency: Agencia): any {
    return {
      id: agency.id,
      nombre: agency.nombre,
      direccion: agency.direccion,
      horarioInicio: agency.horarioInicio,
      horarioTermino: agency.horarioTermino,
      provincia: agency.provincia.id,
      activo: agency.activo,
    };
  }

}
