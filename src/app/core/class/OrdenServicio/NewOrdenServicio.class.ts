import { Estandar } from '../estandar/Estandar.class';
import { Cliente, Contactos } from '../maestros';
import { DetallePago } from '../pagos/DetallePago.class';
import { Carga } from './Carga.class';
import { ServiciosAdicionales } from './Servicios-Adicionales.class';
import { DocumentoRelacionado } from './DocumentoRelacionado.class';
import { OrdenServicioState, PagoState } from 'src/app/shared/enums';
import { IUser } from '../../interfaces/interfaces';
import { SeguridadPago } from './SeguridadPago.class';
import { Ubicacion } from './Ubicacion.class';

export class NewOrdenServicio {
  id: number;
  precio: number;
  detallePago: DetallePago[];
  recepcion: Ubicacion;
  entrega: Ubicacion;
  remitente: Cliente;
  destinatario: Cliente;
  personaEnvia: Cliente;
  seguridadPago: SeguridadPago;
  detalleCarga: Carga[];
  serviciosAdicionales: ServiciosAdicionales[];
  objetosComunes: Carga[];
  documentoRelacionado: DocumentoRelacionado;
  estadoEnvioOrden: OrdenServicioState;
  estadoPagado: PagoState;
  fecha: Date;
  usuario: IUser;
  contactosDestinatario: Contactos[];
  comprobante: string;
  metodoPago: Estandar;
  fechaPago: Date;

  cantidadBultos: number;
  correlativo: string;

  constructor(ordenServicio: Partial<NewOrdenServicio> = {}) {
    this.id = ordenServicio.id ?? 0;
    this.precio = ordenServicio.precio ?? 0;
    this.detallePago = ordenServicio.detallePago ?? [];
    this.recepcion = ordenServicio.recepcion ?? new Ubicacion();
    this.entrega = ordenServicio.entrega ?? new Ubicacion();
    this.remitente = ordenServicio.remitente ?? new Cliente();
    this.destinatario = ordenServicio.destinatario ?? new Cliente();
    this.personaEnvia = ordenServicio.personaEnvia ?? new Cliente();
    this.seguridadPago = ordenServicio.seguridadPago ?? new SeguridadPago();
    this.detalleCarga = ordenServicio.detalleCarga ?? [];
    this.serviciosAdicionales = ordenServicio.serviciosAdicionales ?? [];
    this.objetosComunes = ordenServicio.objetosComunes ?? [];
    this.documentoRelacionado =
      ordenServicio.documentoRelacionado ?? new DocumentoRelacionado();
    this.estadoEnvioOrden =
      ordenServicio.estadoEnvioOrden ?? OrdenServicioState.ORIGEN;
    this.estadoPagado = ordenServicio.estadoPagado ?? PagoState.PENDIENTE;
    this.fecha = ordenServicio.fecha ?? new Date();
    this.usuario = ordenServicio.usuario ?? ({} as IUser);
    this.contactosDestinatario = ordenServicio.contactosDestinatario ?? [];
    this.comprobante = ordenServicio.comprobante ?? '';
    this.metodoPago = ordenServicio.metodoPago ?? new Estandar();
    this.fechaPago = ordenServicio.fechaPago ?? new Date();
    this.cantidadBultos = ordenServicio.cantidadBultos ?? 0;
    this.correlativo = ordenServicio.correlativo ?? '';
  }

  static fromJson(ordenServicio: any): NewOrdenServicio {
    return new NewOrdenServicio({
      id: ordenServicio.id,
      precio: ordenServicio.precio,
      detallePago: ordenServicio.detallePago
        ? DetallePago.fromJsonArray(ordenServicio.detallePago)
        : [],
      recepcion: ordenServicio.recepcion
        ? Ubicacion.fromJson(ordenServicio.recepcion)
        : new Ubicacion(),
      entrega: ordenServicio.entrega
        ? Ubicacion.fromJson(ordenServicio.entrega)
        : new Ubicacion(),
      remitente: ordenServicio.remitente
        ? Cliente.fromJson(ordenServicio.remitente)
        : new Cliente(),
      destinatario: ordenServicio.destinatario
        ? Cliente.fromJson(ordenServicio.destinatario)
        : new Cliente(),
      personaEnvia: ordenServicio.personaEnvia
        ? Cliente.fromJson(ordenServicio.personaEnvia)
        : new Cliente(),
      seguridadPago: ordenServicio.seguridadPago
        ? SeguridadPago.fromJson(ordenServicio.seguridadPago)
        : new SeguridadPago(),
      detalleCarga: ordenServicio.detalleCarga
        ? Carga.fromJsonArray(ordenServicio.detalleCarga)
        : [],
      serviciosAdicionales: ordenServicio.serviciosAdicionales
        ? ServiciosAdicionales.fromJsonArray(ordenServicio.serviciosAdicionales)
        : [],
      objetosComunes: ordenServicio.objetosComunes
        ? Carga.fromJsonArray(ordenServicio.objetosComunes)
        : [],
      documentoRelacionado: ordenServicio.documentoRelacionado
        ? DocumentoRelacionado.fromJson(ordenServicio.documentoRelacionado)
        : new DocumentoRelacionado(),
      estadoEnvioOrden: ordenServicio.estadoEnvioOrden,
      estadoPagado: ordenServicio.estadoPagado,
      fecha: new Date(ordenServicio.fecha),
      usuario: ordenServicio.usuario,
      contactosDestinatario: ordenServicio.contactosDestinatario
        ? Contactos.fromJsonArray(ordenServicio.contactosDestinatario)
        : [],
      comprobante: ordenServicio.comprobante,
      metodoPago: ordenServicio.metodoPago
        ? Estandar.fromJson(ordenServicio.metodoPago)
        : new Estandar(),
      fechaPago: new Date(ordenServicio.fechaPago),
      cantidadBultos: ordenServicio.cantidadBultos,
      correlativo: ordenServicio.correlativo,
    });
  }

  static toJson(ordenServicio: NewOrdenServicio): any {
    return {
      id: ordenServicio.id,
      precio: ordenServicio.precio,
      detallePago: ordenServicio.detallePago,
      recepcion: Ubicacion.toJson(ordenServicio.recepcion),
      entrega: Ubicacion.toJson(ordenServicio.entrega),
      idRemitente: ordenServicio.remitente.id,
      idDestinatario: ordenServicio.destinatario.id,
      idPersonaEnvia: ordenServicio.personaEnvia.id,
      seguridadPago: SeguridadPago.toJsonValidator(
        ordenServicio.seguridadPago,
        ordenServicio.remitente,
        ordenServicio.destinatario
      ),
      detalleCarga: Carga.toJsonArray(ordenServicio.detalleCarga),
      serviciosAdicionales: ServiciosAdicionales.toJsonArray(
        ordenServicio.serviciosAdicionales
      ),
      objetosComunes: Carga.toJsonArray(ordenServicio.objetosComunes),
      documentoRelacionado: DocumentoRelacionado.toJson(
        ordenServicio.documentoRelacionado
      ),
      estadoEnvioOrden: ordenServicio.estadoEnvioOrden,
      estadoPagado: ordenServicio.estadoPagado,
      fecha: ordenServicio.fecha,
      usuario: ordenServicio.usuario.IdUsuario,
      contactosDestinatario: ordenServicio.contactosDestinatario,
      cantidadBultos: ordenServicio.cantidadBultos,
    };
  }
}
