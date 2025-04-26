import { Directive, Input, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible
import { ComprobanteState } from '../../enums';

@Directive({
  selector: '[appComprobanteStatus]',
})
export class ComprobanteStatusDirective implements OnInit {
  @Input('appComprobanteStatus') comprobanteState!: ComprobanteState;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.comprobanteState);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(comprobanteState: ComprobanteState) {
    switch (comprobanteState) {
      case ComprobanteState.EMITIDO:
        return { value: 'EMITIDO', severity: 'success' };
      case ComprobanteState.BAJA_NC:
        return { value: 'BAJA (NC)', severity: 'primary' };
      case ComprobanteState.CARGO_ND:
        return { value: 'CARGO (ND)', severity: 'warning' };
      case ComprobanteState.ANULADO:
        return { value: 'ANULADO', severity: 'danger' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
