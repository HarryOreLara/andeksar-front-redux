import { Estandar } from '../estandar/Estandar.class';

export class DocumentoRelacionado {
  tipoDocumentoRelacionado: Estandar;
  serieDocumentoRelacionado: string;
  guiasAdicionales: string;

  constructor(documentoRelacionado: Partial<DocumentoRelacionado> = {}) {
    this.tipoDocumentoRelacionado =
      documentoRelacionado.tipoDocumentoRelacionado ?? new Estandar();
    this.serieDocumentoRelacionado =
      documentoRelacionado.serieDocumentoRelacionado ?? '';
    this.guiasAdicionales = documentoRelacionado.guiasAdicionales ?? '';
  }

  static fromJson(data: any): DocumentoRelacionado {
    return new DocumentoRelacionado({
      tipoDocumentoRelacionado: data.tipoDocumentoRelacionado
        ? Estandar.fromJson(data.tipoDocumentoRelacionado)
        : new Estandar(),
      serieDocumentoRelacionado: data.serieDocumentoRelacionado,
      guiasAdicionales: data.guiasAdicionales,
    });
  }

  static toJson(documentoRelacionado: DocumentoRelacionado): any {
    return {
      idTipoDocumentoRelacionado:
        documentoRelacionado.tipoDocumentoRelacionado.id,
      serieDocumentoRelacionado: documentoRelacionado.serieDocumentoRelacionado,
      guiasAdicionales: documentoRelacionado.guiasAdicionales,
    };
  }
}
