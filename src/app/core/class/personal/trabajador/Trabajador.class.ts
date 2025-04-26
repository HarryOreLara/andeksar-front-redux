import { Estandar } from "../../estandar/Estandar.class";
import { Chofer } from "./Chofer.class";

export class Trabajador {
  id: number;
  nombreCompleto: string;
  tipoDocumento: Estandar;
  documento: string;
  fechaContratacion: Date;
  genero: string;
  clave: string;
  isChofer: boolean;
  chofer: Chofer;
  

  constructor(trabajador: Partial<Trabajador> = {}) {
    this.id = trabajador.id ?? 0;
    this.nombreCompleto = trabajador.nombreCompleto ?? '';
    this.tipoDocumento = trabajador.tipoDocumento ??  new Estandar();
    this.documento = trabajador.documento ?? '';
    this.fechaContratacion = trabajador.fechaContratacion ?? new Date();
    this.genero = trabajador.genero ?? '';
    this.clave = trabajador.clave ?? '';
    this.isChofer = trabajador.isChofer ?? false;
    this.chofer = trabajador.chofer ?? new Chofer();
    
  }

  static fromJson(trabajador: any): Trabajador {
    return new Trabajador({
      id: trabajador.id,
      nombreCompleto: trabajador.nombreCompleto,
      tipoDocumento: Estandar.fromJson(trabajador.tipoDocumento),
      documento: trabajador.documento,
      fechaContratacion: trabajador.fechaContratacion,
      genero: trabajador.genero == 'M' ? '1' : '2',
      clave: trabajador.clave,
      isChofer: trabajador.isChofer,  
      chofer: trabajador.chofer,
    });
  }

  static toJson(trabajador: Trabajador): any {
    return {
      id: trabajador.id,
      nombreCompleto: trabajador.nombreCompleto,
      tipoDocumento: Estandar.toJson(trabajador.tipoDocumento),
      documento: trabajador.documento,
      fechaContratacion: trabajador.fechaContratacion,
      genero: trabajador.genero == '1' ? 'M' : 'F',
      clave: trabajador.clave,
      isChofer: trabajador.isChofer,
      chofer: trabajador.chofer,
      
    };
  }
}
