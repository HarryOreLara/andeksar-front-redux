import { BzlinkState, ComprobanteState, PagoState, TipoComprobanteState } from "src/app/shared/enums";
import { Comprobante } from "../../class/operaciones/Comprobante.class";
import { Cliente } from "../../class/maestros";
import { Estandar } from "../../class/estandar/Estandar.class";

export const CCOMPROBANTES_CONSTANT:Comprobante[] = [
    new Comprobante({
        id: 1,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F001',
        numero: '001',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 1000,
        correlativo: '001-001',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.EMITIDO,
        estadoBzlink: BzlinkState.GENERADO,
        cliente: new Cliente({
            id: 1,
            razonSocial:'Harry Ore Lara',
            documento:'73617110'
        }),
        formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
        estadoPagado: PagoState.PENDIENTE
    }),

    new Comprobante({
        id: 2,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F002',
        numero: '002',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 800,
        correlativo: '002-002',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.EMITIDO,
        estadoBzlink: BzlinkState.ACEPTADA,
        cliente: new Cliente({
            id: 2,
            razonSocial:'Elisa Anticona',
            documento:'74512552'
        }),
        formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
        estadoPagado: PagoState.CANCELADO
    }),
    new Comprobante({
        id: 3,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F003',
        numero: '003',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 1400,
        correlativo: '003-003',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.EMITIDO,
        estadoBzlink: BzlinkState.RECHAZADA,
        cliente: new Cliente({
            id: 3,
            razonSocial:'Arles Eduardo',
            documento:'78541551'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),

    new Comprobante({
        id: 4,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F004',
        numero: '004',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 2000,
        correlativo: '004-004',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.ANULADO,
        estadoBzlink: BzlinkState.GENERADO,
        cliente: new Cliente({
            id: 4,
            razonSocial:'Jorge Luis',
            documento:'78541551'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),

    new Comprobante({
        id: 5,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F005',
        numero: '005',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 3000,
        correlativo: '005-005',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.ANULADO,
        estadoBzlink: BzlinkState.ACEPTADA,
        cliente: new Cliente({
            id: 2,
            razonSocial:'Johan Capristan',
            documento:'84152110'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),
    new Comprobante({
        id: 6,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F006',
        numero: '006',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 4000,
        correlativo: '006-006',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.ANULADO,
        estadoBzlink: BzlinkState.RECHAZADA,
        cliente: new Cliente({
            id: 1,
            razonSocial:'Harry Ore Lara',
            documento:'73617110'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),
    new Comprobante({
        id: 7,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F007',
        numero: '007',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 5000,
        correlativo: '007-007',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.BAJA_NC,
        estadoBzlink: BzlinkState.GENERADO,
        cliente: new Cliente({
            id: 2,
            razonSocial:'Elisa Anticona',
            documento:'74512552'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),

    new Comprobante({
        id: 8,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F008',
        numero: '008',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 6000,
        correlativo: '008-008',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.BAJA_NC,
        estadoBzlink: BzlinkState.ACEPTADA,
        cliente: new Cliente({
            id: 3,
            razonSocial:'Arles Eduardo',
            documento:'78541551'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),

    new Comprobante({
        id: 9,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F009',
        numero: '009',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 7000,
        correlativo: '009-009',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.BAJA_NC,
        estadoBzlink: BzlinkState.RECHAZADA,
        cliente: new Cliente({
            id: 4,
            razonSocial:'Jorge Luis',
            documento:'78541551'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),

    new Comprobante({
        id: 10,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F010',
        numero: '010',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 8000,
        correlativo: '010-010',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.CARGO_ND,
        estadoBzlink: BzlinkState.GENERADO,
        cliente: new Cliente({
            id: 1,
            razonSocial:'Harry Ore Lara',
            documento:'73617110'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),

    new Comprobante({
        id: 11,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F011',
        numero: '011',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 9000,
        correlativo: '011-011',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.CARGO_ND,
        estadoBzlink: BzlinkState.ACEPTADA,
        cliente: new Cliente({
            id: 2,
            razonSocial:'Elisa Anticona',
            documento:'74512552'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),

    new Comprobante({
        id: 12,
        tipoComprobante: TipoComprobanteState.BE,
        serie: 'F012',
        numero: '012',
        fechaEmision: new Date(),
        fechaVencimiento: new Date(),
        fechaPago: new Date(),
        moneda: 'PEN',
        monto: 10000,
        correlativo: '012-012',
        fechaEnvio: new Date(),
        estadoComprobante: ComprobanteState.CARGO_ND,
        estadoBzlink: BzlinkState.RECHAZADA,
        cliente: new Cliente({
            id: 3,
            razonSocial:'Arles Eduardo',
            documento:'78541551'
        }),
                formaPago: new Estandar({
            id: 1,
            descripcion: 'Efectivo'
        }),
    }),
]