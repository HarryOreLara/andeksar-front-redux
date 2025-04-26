import { Directive, Input, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag';

@Directive({
  selector: '[appExternoStatus]',
  
})
export class ExternoStatusDirective implements OnInit {
  @Input('appExternoStatus') estado!: boolean;

  constructor(private pTag: Tag) {}

  ngOnInit() {
    const config = this.getTagConfig(this.estado);
    this.pTag.value = config.value;
    this.pTag.severity = config.severity;
  }

  private getTagConfig(estado: boolean) {
    switch (estado) {
      case true:
        return { value: 'EXTERNO', severity: 'success' };
      case false:
        return { value: 'INTERNO', severity: 'info' };
      default:
        return { value: 'DESCONOCIDO', severity: 'warning' };
    }
  }
}
