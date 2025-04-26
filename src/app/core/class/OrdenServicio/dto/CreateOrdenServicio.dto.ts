import { Entrega, Recepcion } from 'src/app/core/interfaces/interfaces';
import { Carga } from '../Carga.class';
import { DocumentoSerie } from '../DocumentoSerie.class';
import { ServiciosAdicionales } from '../Servicios-Adicionales.class';
import { DetallePago } from '../../pagos/DetallePago.class';

export class CreateOrdenServicioDTO  {
  id: number;
  precio: number;
  detallePago: DetallePago[];

  idRemitente: number;
  idPersonaEnvia: number;
  idConsignado: number;
  contactos: number[];
  recepcion: Recepcion;
  entrega: Entrega;
  formaPago: number;
  pagador: number;
  detalleCarga: Carga[];
  serviciosAcionales: ServiciosAdicionales[];
  objetosComunes: Carga[];
  observacion: string;
  detallesAdicionales: string;
  documentoSerie: DocumentoSerie;

  constructor(createOrdenServicioDTO: Partial<CreateOrdenServicioDTO> = {}) {
    this.id = createOrdenServicioDTO.id || 0;
    this.precio = createOrdenServicioDTO.precio || 0;
    this.detallePago = createOrdenServicioDTO.detallePago || [];

    this.idRemitente = createOrdenServicioDTO.idRemitente || 0;
    this.idPersonaEnvia = createOrdenServicioDTO.idPersonaEnvia || 0;
    this.idConsignado = createOrdenServicioDTO.idConsignado || 0;
    this.contactos = createOrdenServicioDTO.contactos || [];
    this.recepcion = createOrdenServicioDTO.recepcion || new Recepcion();
    this.entrega = createOrdenServicioDTO.entrega || new Entrega();
    this.formaPago = createOrdenServicioDTO.formaPago || 0;
    this.pagador = createOrdenServicioDTO.pagador || 0;
    this.detalleCarga = createOrdenServicioDTO.detalleCarga || [];
    this.serviciosAcionales = createOrdenServicioDTO.serviciosAcionales || [];
    this.objetosComunes = createOrdenServicioDTO.objetosComunes || [];
    this.observacion = createOrdenServicioDTO.observacion || '';
    this.detallesAdicionales = createOrdenServicioDTO.detallesAdicionales || '';
    this.documentoSerie =
      createOrdenServicioDTO.documentoSerie || new DocumentoSerie();
  }

  static fromJSON(json: any): CreateOrdenServicioDTO {
    return new CreateOrdenServicioDTO({
      id: json.id,
      precio: json.precio,
      detallePago: json.detallePago,
      idRemitente: json.idRemitente,
      idPersonaEnvia: json.idPersonaEnvia,
      idConsignado: json.idConsignado,
      contactos: json.contactos,
      recepcion: json.recepcion,
      entrega: json.entrega,
      formaPago: json.formaPago,
      pagador: json.pagador,
      detalleCarga: json.detalleCarga,
      serviciosAcionales: json.serviciosAcionales,
      objetosComunes: json.objetosComunes,
      observacion: json.observacion,
      detallesAdicionales: json.detallesAdicionales,
      documentoSerie: json.documentoSerie,
    });
  }

  static toJSON(ordenServicio: any): any {
    const { detallesAdicionales, ...rest } = ordenServicio.documentoSerie;

    return {
      id: ordenServicio.id || 0,
      precio: ordenServicio.precio,
      detallePago: ordenServicio.detallePago,
      idRemitente: ordenServicio.remitente.id,
      idConsignado: ordenServicio.destinatario.id,
      idPersonaEnvia: ordenServicio.idPersonaEnvia,
      contactos: ordenServicio.contactos,
      recepcion: ordenServicio.recepcion,
      entrega: ordenServicio.entrega,
      formaPago: ordenServicio.formaPago.id,
      pagador: ordenServicio.pagador.idCliente,
      detalleCarga: ordenServicio.detalleCarga.map((carga: Carga) =>
        Carga.toJson(carga)
      ),
      serviciosAcionales: ordenServicio.serviciosAcionales,
      objetosComunes: ordenServicio.objetosComunes.map((carga: Carga) =>
        Carga.toJson(carga)
      ),
      observacion: ordenServicio.observacion,
      detallesAdicionales: detallesAdicionales,
      codigoSeguridad: ordenServicio.codigoSeguridad,
      documentoAsociado: {
        id: ordenServicio.documentoSerie.tipoDocumentoSerie.id || 0,
        descripcion: ordenServicio.documentoSerie.serie || '',
      },
    };
  }
}
