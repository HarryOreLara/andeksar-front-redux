import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilogramo'
})
export class KilogramoPipe implements PipeTransform {
  transform(value: number, unit: string = 'kg'): string {
    if (value != null) {
      // Formatea el número a dos decimales
      return `${value.toFixed(2)} ${unit}`;
    }
    return `0.00 ${unit}`; // Para casos de null o undefined
  }
}