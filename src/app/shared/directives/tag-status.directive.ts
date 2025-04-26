import { Directive, Input, OnInit } from '@angular/core';
import { PagoState } from '../enums/pago.enum';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible

@Directive({
  selector: '[appTagStatus]',
})
export class TagStatusDirective implements OnInit {
  @Input('appTagStatus') estado!: PagoState;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.estado);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(estado: PagoState) {
    switch (estado) {
      case PagoState.CANCELADO:
        return { value: 'CANCELADO', severity: 'success' };
      case PagoState.PENDIENTE:
        return { value: 'PENDIENTE', severity: 'warning' };
      case PagoState.PARCIAL:
        return { value: 'PARCIAL', severity: 'danger' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
