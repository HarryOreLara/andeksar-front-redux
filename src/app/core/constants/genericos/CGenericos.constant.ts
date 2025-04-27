import { ActivosState, BzlinkState, ComprobanteState, TipoComprobanteState } from 'src/app/shared/enums';
import { PagoState } from 'src/app/shared/enums/pago.enum';
import { Estandar } from '../../class/estandar/Estandar.class';


export const CESTADOS_PAGO_STATE: { name: string; value: PagoState }[] = [
  { name: 'PENDIENTE', value: PagoState.PENDIENTE },
  { name: 'CANCELADO', value: PagoState.CANCELADO },
  { name: 'PARCIAL', value: PagoState.PARCIAL },
];

export const CESTADOS_ACTIVOS_STATE: { name: string; value: ActivosState }[] = [
  { name: 'ACTIVO', value: ActivosState.ACTIVO },
  { name: 'INACTIVO', value: ActivosState.INACTIVO },
  { name: 'TODOS', value: ActivosState.DEFECTO },
];


export const CESTADOS_COMPROBANTE_STATE: { name: string; value:ComprobanteState }[] = [
  {name: 'EMITIDO', value: ComprobanteState.EMITIDO},
  {name: 'ANULADO', value: ComprobanteState.ANULADO},
  {name: 'BAJA_NC', value: ComprobanteState.BAJA_NC},
  {name: 'CARGO_ND', value: ComprobanteState.CARGO_ND},
];



export const CESTADOS_BZLINK_STATE: { name: string; value: BzlinkState }[] = [
  { name: 'GENERADO', value: BzlinkState.GENERADO },
  { name: 'ACEPTADA', value: BzlinkState.ACEPTADA },
  { name: 'RECHAZADA', value: BzlinkState.RECHAZADA },
]


export const CTIPO_COMPROBANTE_STATE: { name: string; value: TipoComprobanteState }[] = [
  { name: 'FACTURA ELECTRONICA', value: TipoComprobanteState.FE },
  { name: 'BOLETA ELECTRONICA', value: TipoComprobanteState.BE },
  { name: 'NOTA DE CREDITO', value: TipoComprobanteState.NC },
  { name: 'NOTA DE DEBITO', value: TipoComprobanteState.ND },
  { name: 'GUIA DE REMISION REMITENTE', value: TipoComprobanteState.GRR },
  { name: 'GUIA DE REMISION TRANSPORTISTA', value: TipoComprobanteState.GRT },
  { name: 'GUIA DE REMISION REMITENTE CONDUCTOR', value: TipoComprobanteState.GRRC },
  { name: 'GUIA DE REMISION TRANSPORTISTA CONDUCTOR', value: TipoComprobanteState.GRTC },
  { name: 'ORDEN DE SERVICIO', value: TipoComprobanteState.OS },

];



export const CTIPO_AGENCIA_STATE:Estandar[] = [
  new Estandar({id:1, descripcion:'Distribución', estado:true}),
  new Estandar({id:2, descripcion:'Acopio', estado:true}),
]