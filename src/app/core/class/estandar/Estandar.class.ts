import { ActivosState } from 'src/app/shared/enums';

export class Estandar {
  id: number;
  descripcion: string;
  estado: boolean;

  constructor(standar: Partial<Estandar> = {}) {
    this.id = standar.id || 0;
    this.descripcion = standar.descripcion || '';
    this.estado = standar.estado || true;
  }

  static fromJson(data: any): Estandar {
    return new Estandar({
      id: data.id as number,
      descripcion: data.descripcion as string,
      estado: data.estado as boolean,
    });
  }

  static toJson(standar: Estandar): any {
    return {
      id: standar.id,
      descripcion: standar.descripcion,
      estado: standar.estado,
    };
  }


  // isEmpty(): boolean {
  //   return this.id === 0 && this.descripcion === '' && this.estado === true;
  // }


}

export class Solicitud {
  cadena: string;
  estado: ActivosState;

  constructor(solicitud: Partial<Solicitud> = {}) {
    this.cadena = solicitud.cadena || '';
    this.estado = solicitud.estado || ActivosState.ACTIVO;
  }

  static fromJson(data: any): Solicitud {
    return new Solicitud({
      cadena: data.cadena,
      estado: data.estado,
    });
  }

  static toJson(solicitud: Solicitud): any {
    return {
      cadena: solicitud.cadena,
      estado: solicitud.estado,
    };
  }
}

export class TypeDocumentResponseDto {
  idTipoDocumento: number;
  descripcion_TipoDocumento: string;

  constructor(typeDocumentResponseDto: Partial<TypeDocumentResponseDto> = {}) {
    this.idTipoDocumento = typeDocumentResponseDto.idTipoDocumento || 0;
    this.descripcion_TipoDocumento =
      typeDocumentResponseDto.descripcion_TipoDocumento || '';
  }

  static fromJson(data: any): TypeDocumentResponseDto {
    return new TypeDocumentResponseDto({
      idTipoDocumento: data.idTipoDocumento,
      descripcion_TipoDocumento: data.descripcion_TipoDocumento,
    });
  }

  toJson(): any {
    return {
      idTipoDocumento: this.idTipoDocumento,
      descripcion_TipoDocumento: this.descripcion_TipoDocumento,
    };
  }
}
