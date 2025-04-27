import { mapperToOrdenServicioOrdenForm } from 'src/app/shared/mappers/orden-servicio.mapper';
import { Cliente, Contactos } from '../maestros';
import { Cabecera } from './Cabecera.class';
import { Carga } from './Carga.class';
import { DocumentoRelacionado } from './DocumentoRelacionado.class';
import { SeguridadPago } from './SeguridadPago.class';
import { ServiciosAdicionales } from './Servicios-Adicionales.class';
import { NewOrdenServicio } from './NewOrdenServicio.class';

export class OrdenForm {
  id:number;
  cabecera: Cabecera;
  remitente: Cliente;
  destinatario: Cliente;
  seguridadPago: SeguridadPago;
  documentoRelacionado: DocumentoRelacionado;
  objetosComunes: Carga[];
  detalleCarga: Carga[];
  serviciosAdicionales: ServiciosAdicionales[];
  personaEnvia: Cliente;
  precioTotal: number;
  contactosDestinatario: Contactos[];

  constructor(orden: Partial<OrdenForm> = {}) {
    this.id = orden.id ?? 0;
    this.cabecera = orden.cabecera ?? new Cabecera();
    this.remitente = orden.remitente ?? new Cliente();
    this.destinatario = orden.destinatario ?? new Cliente();
    this.seguridadPago = orden.seguridadPago ?? new SeguridadPago();
    this.documentoRelacionado =
      orden.documentoRelacionado ?? new DocumentoRelacionado();
    this.objetosComunes = orden.objetosComunes ?? [];
    this.detalleCarga = orden.detalleCarga ?? [];
    this.serviciosAdicionales = orden.serviciosAdicionales ?? [];
    this.personaEnvia = orden.personaEnvia ?? new Cliente();
    this.precioTotal = orden.precioTotal ?? 0;
    this.contactosDestinatario = orden.contactosDestinatario ?? [];
  }

  static fromJson(data: NewOrdenServicio): OrdenForm {
    const newData = mapperToOrdenServicioOrdenForm(data);

    return new OrdenForm({
      id: data.id,
      cabecera: Cabecera.fromJson(newData.cabecera),
      remitente: Cliente.fromJson(data.remitente),
      destinatario: Cliente.fromJson(data.destinatario), //Backend
      seguridadPago: SeguridadPago.fromJson(data.seguridadPago),
      documentoRelacionado: DocumentoRelacionado.fromJson(data.documentoRelacionado),
      objetosComunes: data.objetosComunes.map((carga: any) =>Carga.fromJson(carga)),
      detalleCarga: data.detalleCarga.map((carga: any) =>Carga.fromJson(carga)),
      serviciosAdicionales: data.serviciosAdicionales.map((servicio: any) =>ServiciosAdicionales.fromJson(servicio)),
      personaEnvia: data.personaEnvia? Cliente.fromJson(data.personaEnvia): new Cliente(),
      precioTotal: data.precio,
      contactosDestinatario: data.contactosDestinatario.map((contacto: any) => Contactos.fromJson(contacto)),
    });
  }

  static toJson(orden: any): any {
    return {
      id: orden.id,
      cabecera: Cabecera.toJson(orden.cabecera),
      remitente: Cliente.toJson(orden.remitente),
      destinatario: Cliente.toJson(orden.destinatario),
      seguridadPago: SeguridadPago.toJson(orden.seguridadPago),
      documentoRelacionado: DocumentoRelacionado.toJson(
        orden.documentoRelacionado
      ),
    };
  }



}
