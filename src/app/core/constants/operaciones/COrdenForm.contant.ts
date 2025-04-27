import { Estandar } from '../../class/estandar/Estandar.class';
import { Cliente, Contactos } from '../../class/maestros';
import {
  Cabecera,
  Carga,
  ServiciosAdicionales,
} from '../../class/OrdenServicio';
import { DocumentoRelacionado } from '../../class/OrdenServicio/DocumentoRelacionado.class';
import { OrdenForm } from '../../class/OrdenServicio/OrdenForm.class';
import { SeguridadPago } from '../../class/OrdenServicio/SeguridadPago.class';

const remitente: Cliente = new Cliente({
  id: 141,
  tipoDocumento: {
    id: 52,
    descripcion: 'Doc. Nacional de Identidad',
    estado: true,
  },
  documento: '73617110',
  nombre: 'SIDAME HARRY',
  apellidos: 'ORE LARA',
  razonSocial: 'SIDAME HARRY ORE LARA',
  telefono: '931070632',
  correo: 'harry@gmail.com',
});

const destinatario: Cliente = new Cliente({
  id: 142,
  tipoDocumento: {
    id: 54,
    descripcion: 'Registro Único de Contribuyentes',
    estado: true,
  },
  documento: '20612215210',
  nombre: '',
  apellidos: '',
  razonSocial: 'ANDESKAR S.A.C.',
  telefono: '925151511',
  correo: '',
});

const origen: Estandar = new Estandar({
  id: 1,
  descripcion: 'San Luis',
});

const formaPago: Estandar = new Estandar({
  id: 2,
  descripcion: 'Contra Entrega',
  estado: true,
});

const pagador: Estandar = new Estandar({
  id: 1,
  descripcion: 'Remitente',
});

const destino: Estandar = new Estandar({
  id: 7,
  descripcion: 'Trujillo',
});

const tipoDocumento: Estandar = new Estandar({
  id: 44,
  descripcion: 'Nota de crédito',
  estado: true,
});

const objetosComunes: Carga[] = [
  {
    id: 2,
    estado: true,
    precio: 50,
    unidadMedida: {
      id: 8,
      descripcion: 'Unidad',
      estado: true,
    },
    descripcion: 'CAMA DE 1 1/2 PLAZA SENCILLA',
    nroBultos: 2,
    peso: 0,
    observacion: '',
    total: 50,
  },
  {
    id: 3,
    precio: 25,
    estado: true,
    unidadMedida: {
      id: 8,
      descripcion: 'Unidad',
      estado: true,
    },
    descripcion: 'CAMA DE 2 PLAZAS SENCILLA',
    nroBultos: 1,
    peso: 0,
    observacion: '',
    total: 25,
  },
];

const serviciosAdicionales: ServiciosAdicionales[] = [
  {
    uniqueId: '6c993969-c4b0-4327-b6ee-efb552d6b104',
    id: 2,
    descripcion: 'Recojo',
    nombre: 'Recojo',
    createdAt: '',
    state: '',
    value: 2,
    precio: 45,
    total: 45,
    nroBultos: 1,
    unidadMedida: 1,
  },
  {
    uniqueId: '9e0982a8-17d1-4e36-a852-11b80b3812e0',
    id: 5,
    descripcion: 'Embalaje',
    nombre: 'Embalaje',
    createdAt: '',
    state: '',
    value: 5,
    precio: 32,
    total: 32,
    nroBultos: 1,
    unidadMedida: 1,
  },
];

const detalleCarga: Carga[] = [
  {
    id: 0,
    precio: 45,
    unidadMedida: {
      id: 2,
      descripcion: 'Caja',
      estado: true,
    },
    descripcion: 'CAJA DE ZAPATOS',
    nroBultos: 3,
    estado: true,
    peso: 45,
    observacion: '',
    total: 45,
  },
];

const personaEnvia: Cliente = new Cliente({
  id: 141,
  tipoDocumento: {
    id: 52,
    descripcion: 'Doc. Nacional de Identidad',
    estado: true,
  },
  documento: '73617110',
  nombre: 'SIDAME HARRY',
  apellidos: 'ORE LARA',
  razonSocial: 'SIDAME HARRY ORE LARA',
});

const contactosDestinatario: Contactos[] = [
  new Contactos({
    activo: true,
    idContacto: 0,
    idCliente: 141,
    documento: '73617110',
    nombre: 'SIDAME HARRY',
    telefono: '931070632',
  }),
  new Contactos({
    activo: true,
    idContacto: 0,
    idCliente: 141,
    documento: '73617110',
    nombre: 'SIDAME HARRY',
    telefono: '931070632',
  }),
];

///////////CABECERA
const tipoRecepcion = new Estandar({
  id: 1,
  descripcion: 'Agencia',
});

const tipoEntrega = new Estandar({
  id: 1,
  descripcion: 'Agencia',
});

const direccionEntrega = new Estandar({
  id: 1,
  descripcion: 'Av. Vallejo',
});

const cabecera = new Cabecera({
  origen: origen,
  destino: destino,
  tipoRecepcion: tipoRecepcion,
  tipoEntrega: tipoEntrega,
  direccionEntrega: direccionEntrega,
});

///////SEGURIDAD PAGO

const seguridadPago = new SeguridadPago({
  formaPago: formaPago,
  pagador: pagador,
  codigoSeguridad: '1234',
  observacion: 'Ninguna',
});

////////DOCUMENTO RELACIONADO
const documentoRelacionado = new DocumentoRelacionado({
  tipoDocumentoRelacionado: tipoDocumento,
  serieDocumentoRelacionado: '001-0000001',
  guiasAdicionales: '001-0000001',
});

export const CORDEN_FORM: OrdenForm = new OrdenForm({
  cabecera: cabecera,
  remitente: remitente,
  destinatario: destinatario,
  seguridadPago: seguridadPago,
  documentoRelacionado: documentoRelacionado,
  objetosComunes: objetosComunes,
  detalleCarga: detalleCarga,
  serviciosAdicionales: serviciosAdicionales,
  personaEnvia: personaEnvia,
  contactosDestinatario: contactosDestinatario,
});
