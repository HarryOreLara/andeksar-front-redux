import { OrdenServicioState, PagoState } from 'src/app/shared/enums';
import { Estandar } from '../../class/estandar/Estandar.class';
import { Cliente, Contactos } from '../../class/maestros';
import { Carga, ServiciosAdicionales } from '../../class/OrdenServicio';
import { DocumentoRelacionado } from '../../class/OrdenServicio/DocumentoRelacionado.class';
import { NewOrdenServicio } from '../../class/OrdenServicio/NewOrdenServicio.class';
import { SeguridadPago } from '../../class/OrdenServicio/SeguridadPago.class';
import { Ubicacion } from '../../class/OrdenServicio/Ubicacion.class';
import { IUser } from '../../interfaces/interfaces';
import { DetallePago } from '../../class/pagos/DetallePago.class';

const objetosComunes: Carga[] = [
  {
    id: 2,
    precio: 50,
    unidadMedida: {
      sigla: 'NIU',
      id: 8,
      descripcion: 'Unidad',
      estado: true,
      createdAt: new Date(),
    },
    descripcion: 'CAMA DE 1 1/2 PLAZA SENCILLA',
    nroBultos: 2,
    peso: 0,
    observacion: '',
    total: 100,
    porcentaje: 50,
  },
  {
    id: 3,
    precio: 25,
    unidadMedida: {
      sigla: 'NIU',
      id: 8,
      descripcion: 'Unidad',
      estado: true,
      createdAt: new Date(),
    },
    descripcion: 'CAMA DE 2 PLAZAS SENCILLA',
    nroBultos: 1,
    peso: 0,
    observacion: '',
    total: 25,
    porcentaje: 50,
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
      sigla: 'CAJ',
      createdAt: new Date(),
    },
    descripcion: 'CAJA DE ZAPATOS',
    nroBultos: 3,
    peso: 45,
    observacion: '',
    total: 45,
    porcentaje: 0,
  },
];

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

const recepcion = new Ubicacion({
  direccion: new Estandar({
    id: 0,
    descripcion: '',
  }),
  lugar: new Estandar({
    id: 1,
    descripcion: 'San Luis',
  }),
  tipo: new Estandar({
    id: 1,
    descripcion: 'Agencia',
  }),
});

const entrega = new Ubicacion({
  direccion: new Estandar({
    id: 135,
    descripcion: 'Jr. Bolivar N° 1041',
  }),
  lugar: new Estandar({
    id: 12,
    descripcion: 'Huamachuco',
  }),
  tipo: new Estandar({
    id: 2,
    descripcion: 'Delivery',
  }),
});

const tipoDocumento: Estandar = new Estandar({
  id: 44,
  descripcion: 'Nota de crédito',
  estado: true,
});

const documentoRelacionado = new DocumentoRelacionado({
  tipoDocumentoRelacionado: tipoDocumento,
  serieDocumentoRelacionado: '001-0000001',
  guiasAdicionales: '001-0000001',
});

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

const formaPago: Estandar = new Estandar({
  id: 2,
  descripcion: 'Contra Entrega',
  estado: true,
});

const pagador: Estandar = new Estandar({
  id: 1,
  descripcion: 'Remitente',
});

const seguridadPago = new SeguridadPago({
  formaPago: formaPago,
  pagador: pagador,
  codigoSeguridad: '1234',
  observacion: 'Ninguna',
});

const metodoPago = new Estandar({
  id: 1,
  descripcion: 'Efectivo',
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

const detallePago: DetallePago[] = [
  new DetallePago({
    fecha: new Date().toISOString(),
    importe: 20,
    metodoPago: new Estandar({
      id: 2,
      descripcion: 'Tarjeta de crédito',
    }),
    pagante: new Cliente({
      id: 141,
      tipoDocumento: {
        id: 52,
        descripcion: 'Doc. Nacional de Identidad',
        estado: true,
      },
      documento: '73617110',
      razonSocial: 'SIDAME HARRY ORE LARA',
    }),
    fechaOperacion: new Date().toISOString(),
    id: 1,
    idCaja: 2,
    comprobante: 1,
    idOrden: 1,
    nroOperacion: '1234',
    usuario: 'Harry',
  }),
];

export const CORDEN_SERVICIO: NewOrdenServicio = new NewOrdenServicio({
  id: 1334,
  recepcion: recepcion,
  entrega: entrega,
  destinatario: destinatario,
  remitente: remitente,
  serviciosAdicionales: serviciosAdicionales,
  objetosComunes: objetosComunes,
  detalleCarga: detalleCarga,
  documentoRelacionado: documentoRelacionado,
  detallePago: detallePago,
  personaEnvia: personaEnvia,
  precio: 0,
  fechaPago: new Date(),
  fecha: new Date(),
  cantidadBultos: 0,
  contactosDestinatario: contactosDestinatario,
  seguridadPago: seguridadPago,
  comprobante: '',
  estadoEnvioOrden: OrdenServicioState.ORIGEN,
  estadoPagado: PagoState.PENDIENTE,
  metodoPago: metodoPago,
  usuario: {} as IUser,
});
