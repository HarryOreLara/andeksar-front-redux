import { Directive, Input, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag'; // Importa el tipo si es accesible

@Directive({
  selector: '[siNoTag]',
})
export class SiNoTagDirective implements OnInit {
  @Input('siNoTag') estado!: boolean;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.estado);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(estado: boolean) {
    switch (estado) {
      case true:
        return { value: 'SI', severity: 'success' };
      case false:
        return { value: 'NO', severity: 'danger' };
      default:
        return { value: 'DESCONOCIDO', severity: 'info' };
    }
  }
}
