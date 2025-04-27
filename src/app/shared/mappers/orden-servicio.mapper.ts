import { OrdenForm } from 'src/app/core/class/OrdenServicio/OrdenForm.class';
import { OrdenServicioState, PagoState } from '../enums';
import { IUser } from 'src/app/core/interfaces/interfaces';
import { Comprobante } from 'src/app/core/class/operaciones/Comprobante.class';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import {
  Cabecera,
  Carga,
  ServiciosAdicionales,
} from 'src/app/core/class/OrdenServicio';
import { Cliente, Contactos } from 'src/app/core/class/maestros';
import { SeguridadPago } from 'src/app/core/class/OrdenServicio/SeguridadPago.class';
import { DocumentoRelacionado } from 'src/app/core/class/OrdenServicio/DocumentoRelacionado.class';

export const mapperToAnyOrdenForm = (
  id:number,
  cabecera: Cabecera,
  remitente: Cliente,
  destinatario: Cliente,
  seguridadPago: SeguridadPago,
  documentoRelacionado: DocumentoRelacionado,
  detalleCarga: Carga[],
  objetosComunes: Carga[],
  serviciosAdicionales: ServiciosAdicionales[],
  personaEnvia: Cliente,
  precioTotal: number,
  contactosDestinatario: Contactos[]
): OrdenForm => {
  return new OrdenForm({
    id: id,
    cabecera: cabecera,
    remitente: remitente,
    destinatario: destinatario,
    seguridadPago: seguridadPago,
    documentoRelacionado: documentoRelacionado,
    objetosComunes: objetosComunes,
    detalleCarga: detalleCarga,
    serviciosAdicionales: serviciosAdicionales,
    personaEnvia: personaEnvia,
    precioTotal: precioTotal,
    contactosDestinatario: contactosDestinatario,
  });
};

export const mapperToOrdenFormNewOrdenServicio = (
  ordenForm: OrdenForm
): NewOrdenServicio => {
  const {
    cabecera,
    remitente,
    destinatario,
    seguridadPago,
    documentoRelacionado,
    precioTotal,
    contactosDestinatario,
    id
  } = ordenForm;

  const myNewOrdenServicio = new NewOrdenServicio({
    id: id,
    precio: precioTotal,
    detallePago: [],
    recepcion: new Ubicacion({
      lugar: cabecera.origen ? cabecera.origen : new Estandar(),
      tipo: cabecera.tipoRecepcion ? cabecera.tipoRecepcion : new Estandar(),
      direccion: cabecera.direccionRecepcion
        ? cabecera.direccionRecepcion
        : new Estandar(),
    }),
    entrega: new Ubicacion({
      lugar: cabecera.destino ? cabecera.destino : new Estandar(),
      tipo: cabecera.tipoEntrega ? cabecera.tipoEntrega : new Estandar(),
      direccion: cabecera.direccionEntrega
        ? cabecera.direccionEntrega
        : new Estandar(),
    }),
    remitente: remitente,
    destinatario: destinatario,
    personaEnvia: ordenForm.personaEnvia,
    seguridadPago: seguridadPago,
    detalleCarga: ordenForm.detalleCarga,
    serviciosAdicionales: ordenForm.serviciosAdicionales,
    objetosComunes: ordenForm.objetosComunes,
    documentoRelacionado: documentoRelacionado,
    estadoEnvioOrden: OrdenServicioState.ORIGEN,
    estadoPagado: PagoState.PENDIENTE,
    fecha: new Date(),
    usuario: {} as IUser,
    contactosDestinatario: contactosDestinatario,
    comprobante: '',
    metodoPago: new Estandar(),
    fechaPago: new Date(),
    cantidadBultos: ordenForm.detalleCarga.length + ordenForm.objetosComunes.length ,

  });

  return myNewOrdenServicio;
};

export const mapperToOrdenServicioCabecera = (
  recepcion: Ubicacion,
  entrega: Ubicacion
): Cabecera => {
  return new Cabecera({
    origen: recepcion.lugar,
    destino: entrega.lugar,
    tipoRecepcion: recepcion.tipo,
    tipoEntrega: entrega.tipo,
    direccionEntrega: entrega.direccion,
    direccionRecepcion: recepcion.direccion,
  });
};

export const mapperToOrdenServicioOrdenForm = (
  ordenServicio: NewOrdenServicio
): OrdenForm => {
  const cabecera = mapperToOrdenServicioCabecera(
    ordenServicio.recepcion,
    ordenServicio.entrega
  );

  return new OrdenForm({
    cabecera: cabecera,
  });
};
