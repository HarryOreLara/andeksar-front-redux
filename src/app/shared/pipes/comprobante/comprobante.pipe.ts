import { Pipe, PipeTransform } from '@angular/core';
import { TipoComprobanteState } from '../../enums';

@Pipe({
  name: 'comprobante',
})
export class ComprobantePipe implements PipeTransform {
  transform(value: TipoComprobanteState): string {
    const states: Record<number, string> = {
      [TipoComprobanteState.NINGUNO]: 'Ninguno',
      [TipoComprobanteState.FE]: 'FACTURA ELECTRÓNICA',
      [TipoComprobanteState.BE]: 'BOLETA ELECTRÓNICA',
      [TipoComprobanteState.NC]: 'Nota de Crédito',
      [TipoComprobanteState.ND]: 'Nota de Débito',
      [TipoComprobanteState.GRR]: 'Guía de Remisión Remitente',
      [TipoComprobanteState.GRT]: 'Guía de Remisión Transportista',
      [TipoComprobanteState.GRRC]: 'Guía de Remisión Remitente con Cargos',
      [TipoComprobanteState.GRTC]: 'Guía de Remisión Transportista con Cargos',
      [TipoComprobanteState.OS]: 'Orden de Servicio',
    };
  
    return states[value] || 'Estado desconocido';
  }
}
