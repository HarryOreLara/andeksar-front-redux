import { Directive, Input, OnInit } from '@angular/core';
import { PagoState } from '../enums/pago.enum';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';

@Directive({
  selector: '[appVehiculoStatus]',
})
export class VehiculoStatusDirective implements OnInit {
  @Input('appVehiculoStatus') estado!: Estandar;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.estado);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(estandar: Estandar) {
    switch (estandar.id) {
      case 1:
        return { value: 'ACTIVO', severity: 'success' };
      case 2:
        return { value: 'MANTENIMIENTO', severity: 'warning' };
      case 3:
        return { value: 'BAJA', severity: 'danger' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
