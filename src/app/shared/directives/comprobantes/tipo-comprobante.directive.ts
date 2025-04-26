import { Directive, Input, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible
import { TipoComprobanteState } from '../../enums';

@Directive({
  selector: '[appTipoComprobante]',
})
export class TipoComprobanteDirective implements OnInit {
  @Input('appTipoComprobante') tipoComprobanteState!: TipoComprobanteState;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.tipoComprobanteState);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(tipoComprobanteState: TipoComprobanteState) {
    switch (tipoComprobanteState) {
      case TipoComprobanteState.FE:
        return { value: 'FACTURA ELECTRONICA', severity: 'success' };
      case TipoComprobanteState.BE:
        return { value: 'BOLETA ELECTRONICA', severity: 'info' };
      case TipoComprobanteState.NC:
        return { value: 'NOTA CREDITO', severity: 'danger' };
      case TipoComprobanteState.ND:
        return { value: 'NOTA DEBITO', severity: 'danger' };
      case TipoComprobanteState.GRR:
        return { value: 'GUIA REMISION REMITENTE', severity: 'info' };
      case TipoComprobanteState.GRT:
        return { value: 'GUIA REMISION TRANSPORTISTA', severity: 'info' };
      case TipoComprobanteState.GRRC:
        return { value: 'GUIA REMISION REMITENTE CONDUCTOR', severity: 'info' };
      case TipoComprobanteState.GRTC:
        return { value: 'GUIA REMISION TRANSPORTISTA CONDUCTOR', severity: 'info' };
      case TipoComprobanteState.OS:
        return { value: 'ORDEN DE SERVICIO', severity: 'info' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
