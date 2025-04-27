import { TipoComprobanteState } from "src/app/shared/enums";
import { Cliente } from "../../class/maestros";
import { PagoComprobante } from "../../class/pagos/PagoComprobanteclass";



export const CPAGO_COMPROBANTE_CONSTANT: PagoComprobante = new PagoComprobante({
    idComprobante: [1],
    cliente: new Cliente({
        id: 1,
        razonSocial: 'Harry Ore Lara',
        documento: '73617110'
    }),
    detallePago: [],
    deudaActual: 100,
    monto: 100,
    tipoComprobante: TipoComprobanteState.FE
});