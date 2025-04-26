import { Estandar } from '../estandar/Estandar.class';

export class DocumentoSerie {
  tipoDocumentoSerie: Estandar;
  serie: string;
  detallesAdicionales: string;

  constructor(documentoSerie: Partial<DocumentoSerie> = {}) {
    this.tipoDocumentoSerie = documentoSerie.tipoDocumentoSerie || new Estandar();
    this.serie = documentoSerie.serie || '';
    this.detallesAdicionales = documentoSerie.detallesAdicionales || '';
  }

  static fromJson(data: any): DocumentoSerie {
    return new DocumentoSerie({
      tipoDocumentoSerie: Estandar.fromJson(data.tipoDocumentoSerie),
      serie: data.serie,
      detallesAdicionales: data.detallesAdicionales,
    });
  }

  static toJson(documentoSerie: DocumentoSerie): any {
    return {
      tipoDocumentoSerie: Estandar.toJson(documentoSerie.tipoDocumentoSerie),
      serie: documentoSerie.serie,
      detallesAdicionales: documentoSerie.detallesAdicionales,
    };
  }
}
