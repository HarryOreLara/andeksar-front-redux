import { Directive, Input, OnInit } from '@angular/core';
import { PagoState } from '../enums/pago.enum';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible

@Directive({
  selector: '[generoTag]',
})
export class GeneroTagDirective implements OnInit {
  @Input('generoTag') genero!: string;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.genero);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(genero: string) {
    switch (genero) {
      case '1':
        return { value: 'MASCULINO', severity: 'success' };
      case '2':
        return { value: 'FEMENINO', severity: 'info' };
      default:
        return { value: 'DESCONOCIDO', severity: 'danger' };
    }
  }
}
