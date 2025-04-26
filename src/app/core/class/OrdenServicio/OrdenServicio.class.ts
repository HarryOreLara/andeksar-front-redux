import { PagoState } from 'src/app/shared/enums/pago.enum';
import { Entrega, Recepcion } from '../../interfaces/interfaces';
import { Estandar } from '../estandar/Estandar.class';
import { Cliente, Contactos } from '../maestros';
import { DetallePago } from '../pagos/DetallePago.class';
import { Carga } from './Carga.class';
import { DocumentoSerie } from './DocumentoSerie.class';
import { ServiciosAdicionales } from './Servicios-Adicionales.class';
import { Pagador } from './Pagador.class';
import { OrdenServicioState } from 'src/app/shared/enums/envio-orden.enum';

export class OrdenServicio {
  id: number;
  precio: number;
  detallePago: DetallePago[];
  idPersonaEnvia: number;
  contactos: Contactos[];
  recepcion: Recepcion;
  entrega: Entrega;
  pagador: Pagador;
  detalleCarga: Carga[];
  serviciosAcionales: ServiciosAdicionales[];
  objetosComunes: Carga[];
  observacion: string;
  detallesAdicionales: string;
  documentoSerie: DocumentoSerie;
  codigoSeguridad: string;
  formaPago: Estandar;
  guiaRemitente: string;
  guia: string;
  remitente: Cliente;
  destinatario: Cliente;
  deudaActual: number;
  fecha: Date;
  nroGuiaTransportista: string;
  origen: string;
  destino: string;
  cantidadBultos: number;
  comprobante: string;
  estadoPagado: PagoState;
  metodoPago: Estandar;
  fechaPago: Date;
  nroManifiesto: string;
  usuario: string;
  estadoEnvioOrden: OrdenServicioState;
  

  constructor(ordenServicio: Partial<OrdenServicio> = {}) {
    this.id = ordenServicio.id ?? 0;
    this.precio = ordenServicio.precio ?? 0;
    this.detallePago = ordenServicio.detallePago ?? [];
    this.idPersonaEnvia = ordenServicio.idPersonaEnvia ?? 0;
    this.contactos = ordenServicio.contactos ?? [];
    this.recepcion = ordenServicio.recepcion ?? new Recepcion();
    this.entrega = ordenServicio.entrega ?? new Entrega();
    this.pagador = ordenServicio.pagador ?? new Pagador();
    this.detalleCarga = ordenServicio.detalleCarga ?? [];
    this.serviciosAcionales = ordenServicio.serviciosAcionales ?? [];
    this.objetosComunes = ordenServicio.objetosComunes ?? [];
    this.observacion = ordenServicio.observacion ?? '';
    this.detallesAdicionales = ordenServicio.detallesAdicionales ?? '';
    this.documentoSerie = ordenServicio.documentoSerie ?? new DocumentoSerie();
    this.codigoSeguridad = ordenServicio.codigoSeguridad ?? '';
    this.formaPago = ordenServicio.formaPago ?? new Estandar();
    this.guiaRemitente = ordenServicio.guiaRemitente ?? '';
    this.guia = ordenServicio.guia ?? '';
    this.remitente = ordenServicio.remitente ?? new Cliente();
    this.destinatario = ordenServicio.destinatario ?? new Cliente();
    this.deudaActual = ordenServicio.deudaActual ?? 0;
    this.fecha = ordenServicio.fecha ?? new Date();
    this.nroGuiaTransportista = ordenServicio.nroGuiaTransportista ?? '';
    this.origen = ordenServicio.origen ?? '';
    this.destino = ordenServicio.destino ?? '';
    this.cantidadBultos = ordenServicio.cantidadBultos ?? 0;
    this.comprobante = ordenServicio.comprobante ?? '';
    this.estadoPagado = ordenServicio.estadoPagado ?? PagoState.PENDIENTE;
    this.metodoPago = ordenServicio.metodoPago ?? new Estandar();
    this.fechaPago = ordenServicio.fechaPago ?? new Date();
    this.nroManifiesto = ordenServicio.nroManifiesto ?? '';
    this.usuario = ordenServicio.usuario ?? '';
    this.estadoEnvioOrden = ordenServicio.estadoEnvioOrden ?? OrdenServicioState.ORIGEN;
  }

  /**
   * Tener en cuenta que para el create todo se cumple, pero para el response
   * algunas cosas no se estan cumpliendo, si algo pasa, ver aca detalladamente
   * @param ordenServicio
   * @returns
   */
  static fromJSON(ordenServicio: any): OrdenServicio {
    let deudaActual = 0;

    if (ordenServicio.id === 0) {
      deudaActual = ordenServicio.precio || 0;
    } else {
      const totalPagado = (ordenServicio.detallePago || []).reduce(
        (sum: number, detalle: any) => sum + (detalle.importe || 0),
        0
      );
      deudaActual = (ordenServicio.precio || 0) - totalPagado;
    }

    return new OrdenServicio({
      id: ordenServicio.id,
      precio: ordenServicio.precio,
      detallePago: ordenServicio.detallePago,
      formaPago: ordenServicio.formaPago,
      guiaRemitente: ordenServicio.guiaRemitente, //TODO: Revisar
      guia: ordenServicio.guia, //TODO: Revisar
      remitente: ordenServicio.remitente,
      destinatario: ordenServicio.destinatario,
      deudaActual: deudaActual, //TODO: Revisar
      pagador: ordenServicio.pagador,
      fecha: ordenServicio.fecha,
      nroGuiaTransportista: ordenServicio.nroGuiaTransportista,
      origen: ordenServicio.origen,
      destino: ordenServicio.destino,
      cantidadBultos: ordenServicio.cantidadBultos,
      comprobante: ordenServicio.comprobante,
      estadoPagado: ordenServicio.estadoPagado,
      metodoPago: ordenServicio.metodoPago,
      fechaPago: ordenServicio.fechaPago,
      nroManifiesto: ordenServicio.nroManifiesto,
      usuario: ordenServicio.usuario,
    });
  }

  static toJSON(ordenServicio: OrdenServicio): any {
    const { detallesAdicionales, ...rest } = ordenServicio.documentoSerie;

    return {
      id: ordenServicio.id,
      precio: ordenServicio.precio,
      detallePago: ordenServicio.detallePago,
      idRemitente: ordenServicio.remitente.id,
      idConsignado: ordenServicio.destinatario.id,
      idPersonaEnvia: ordenServicio.idPersonaEnvia,
      contactos: ordenServicio.contactos.map((item)=> item.idContacto),
      recepcion: ordenServicio.recepcion,
      entrega: ordenServicio.entrega,
      formaPago: ordenServicio.formaPago.id,
      pagador: ordenServicio.pagador.idCliente == 0 ? ordenServicio.remitente.id : ordenServicio.destinatario.id,
      detalleCarga: ordenServicio.detalleCarga.map((carga: Carga) => Carga.toJson(carga)),
      serviciosAcionales: ordenServicio.serviciosAcionales,
      objetosComunes: ordenServicio.objetosComunes.map((carga: Carga) =>Carga.toJson(carga)),
      observacion: ordenServicio.observacion,
      detallesAdicionales: ordenServicio.documentoSerie.detallesAdicionales,
      codigoSeguridad: ordenServicio.codigoSeguridad,
      documentoAsociado: {
        id: ordenServicio.documentoSerie.tipoDocumentoSerie || 0,
        descripcion: ordenServicio.documentoSerie.serie || '',
      },
      estadoEnvioOrden: ordenServicio.recepcion.idTipoRecepcion === 1 ? OrdenServicioState.ORIGEN : OrdenServicioState.PENDIENTE_RECOJO,
    };
  }



  // static toEmbarqueJson(ordenServicio: OrdenServicio): any {
  //   idOrden: ordenServicio.id;
  //   idDestino: ordenServicio.;
  // }
}
