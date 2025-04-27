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
  activo: boolean;
  longitud: string;
  latitud: string;
  tipoAgencia: Estandar;
  agenciaPadre: Estandar;

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
    this.activo = agencia.activo ?? true;

    this.longitud = agencia.longitud ?? '';
    this.latitud = agencia.latitud ?? '';
    this.tipoAgencia = agencia.tipoAgencia ?? new Estandar();
    this.agenciaPadre = agencia.agenciaPadre ?? new Estandar();
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
      activo: agenciaJson.activo == ActivosState.ACTIVO ? true : false,

      longitud: agenciaJson.longitud ?? '',
      latitud: agenciaJson.latitud ?? '',
      tipoAgencia: agenciaJson.tipoAgencia
        ? Estandar.fromJson(agenciaJson.tipoAgencia)
        : new Estandar(),
      agenciaPadre: agenciaJson.agenciaPadre
        ? Estandar.fromJson(agenciaJson.agenciaPadre)
        : new Estandar(),
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
      activo: agencia.activo == ActivosState.ACTIVO ? true : false,
    });
  }

  static toJson(agency: Agencia): any {
    return {
      id: agency.id,
      nombre: agency.nombre,
      direccion: agency.direccion,
      horarioInicio: agency.horarioInicio,
      horarioTermino: agency.horarioTermino,
      idProvincia: agency.provincia.id,
      activo: agency.activo ? ActivosState.ACTIVO : ActivosState.INACTIVO,
      longitud: agency.longitud,
      latitud: agency.latitud,
      idTipoAgencia: agency.tipoAgencia.id,
      idAgenciaPadre: agency.agenciaPadre.id ?? 0,
    };
  }
}

