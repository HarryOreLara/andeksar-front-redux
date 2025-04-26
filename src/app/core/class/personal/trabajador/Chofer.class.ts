import { Estandar } from "../../estandar/Estandar.class";

export class Chofer {
  id: number;
  nroLicenciaConducir: string;
  fechaExpiracionLicencia: Date;
  tipoLicencia: Estandar;

  constructor(chofer: Partial<Chofer> = {}) {
    this.id = chofer.id ?? 0;
    this.nroLicenciaConducir = chofer.nroLicenciaConducir ?? '';
    this.fechaExpiracionLicencia = chofer.fechaExpiracionLicencia ?? new Date();
    this.tipoLicencia = chofer.tipoLicencia ??  new Estandar();
  }

  static fromJson(chofer: any): Chofer {
    return new Chofer({
      id: chofer.id,
      nroLicenciaConducir: chofer.nroLicenciaConducir,
      fechaExpiracionLicencia: chofer.fechaExpiracionLicencia,
      tipoLicencia: Estandar.fromJson(chofer.tipoLicencia),
    });
  }

  static toJson(chofer: Chofer): any {
    return {
      id: chofer.id,
      nroLicenciaConducir: chofer.nroLicenciaConducir,
      fechaExpiracionLicencia: chofer.fechaExpiracionLicencia,
      tipoLicencia: Estandar.toJson(chofer.tipoLicencia),
    };
  }
}
