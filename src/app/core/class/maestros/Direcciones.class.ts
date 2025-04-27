import { Estandar } from '../estandar/Estandar.class';

export class Direcciones {
  idDireccion: number;
  idCliente: number;
  direccion: string;
  departamento: Estandar;
  provincia: Estandar;
  isPrincipal: boolean;
  ubigeoProvincia: string;
  activo: boolean;

  constructor(direccion: Partial<Direcciones> = {}) {
    this.idDireccion = direccion.idDireccion ?? 0;
    this.idCliente = direccion.idCliente ?? 0;
    this.direccion = direccion.direccion ?? '';
    this.departamento = direccion.departamento ?? new Estandar();
    this.provincia = direccion.provincia ?? new Estandar();
    this.isPrincipal = direccion.isPrincipal ?? false;
    this.ubigeoProvincia = direccion.ubigeoProvincia ?? '';
    this.activo = direccion.activo ?? true;
  }

  static fromJson(data: any): Direcciones {
    const myDireccion = new Direcciones({
      idDireccion: data.idDireccion,
      idCliente: data.idCliente,
      direccion: data.direccion,
      departamento: data.departamento
        ? Estandar.fromJson(data.departamento)
        : new Estandar(),
      provincia: data.provincia
        ? Estandar.fromJson(data.provincia)
        : new Estandar(),
      isPrincipal: data.isPrincipal,
      ubigeoProvincia: data.ubigeoProvincia,
      activo: data.activo,
    });

    return myDireccion;
  }

  static toJson(direccion: Direcciones): any {

    return {
      idDireccion: direccion.idDireccion,
      idCliente: direccion.idCliente,
      direccion: direccion.direccion,
      idDepartamento: direccion.departamento.id,
      idProvincia: direccion.provincia.id,
      isPrincipal: direccion.isPrincipal,
      ubigeoProvincia: direccion.ubigeoProvincia,
      activo: direccion.activo,      
    };
  }

  static toJsonArray(direcciones: Direcciones[]): any {
    return direcciones.map((direccion) => Direcciones.toJson(direccion));
  }
}
