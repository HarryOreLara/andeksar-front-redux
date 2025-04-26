import { Directive, Input, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible
import { BzlinkState } from '../../enums';

@Directive({
  selector: '[appBzlinkStatus]',
})
export class BzlinkStatusDirective implements OnInit {
  @Input('appBzlinkStatus') bzlinkState!: BzlinkState;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.bzlinkState);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(bzlinkState: BzlinkState) {

    switch (bzlinkState) {
      case BzlinkState.ACEPTADA:
        return { value: 'ACEPTADA', severity: 'success' };
      case BzlinkState.GENERADO:
        return { value: 'GENERADO', severity: 'warning' };
      case BzlinkState.RECHAZADA:
        return { value: 'RECHAZADA', severity: 'danger' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
