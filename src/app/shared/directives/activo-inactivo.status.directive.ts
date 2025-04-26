import { Directive, Input, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible
import { ActivosState } from '../enums';

@Directive({
  selector: '[appTagActivoState]',
})
export class TagActivoStateDirective implements OnInit {
  @Input('appTagActivoState') estado!: ActivosState;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.estado);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(estado: ActivosState) {
    switch (estado) {
      case ActivosState.ACTIVO :
        return { value: 'ACTIVO', severity: 'success' };
      case ActivosState.DEFECTO:
        return { value: 'DEFECTO', severity: 'warning' };
      case ActivosState.INACTIVO:
        return { value: 'INACTIVO', severity: 'danger' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
