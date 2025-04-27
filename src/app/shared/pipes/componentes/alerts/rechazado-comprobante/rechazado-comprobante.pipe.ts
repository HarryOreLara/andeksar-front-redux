import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechazadoComprobante'
})
export class RechazadoComprobantePipe implements PipeTransform {
  transform(value: string): string[] {
    if (!value) return [];

    return value
      .split(';')  // Divide por ';'
      .map(e => e.trim()) // Elimina espacios en blanco alrededor
      .filter(e => e); // Elimina elementos vacíos
  }
}