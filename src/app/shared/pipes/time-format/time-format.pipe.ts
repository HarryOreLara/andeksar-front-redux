import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (!value && value !== 0) return '';

    const days = Math.floor(value / 1440); // 1440 minutos en un día
    const hours = Math.floor((value % 1440) / 60);
    const minutes = value % 60;

    let result = '';

    if (days > 0) {
      result += `${days}d `;
    }

    if (hours > 0 || days > 0) {  // Mostrar horas si hay días o si hay horas
      result += `${hours}h `;
    }

    result += `${minutes}m`;

    return result.trim(); // Trim para evitar espacios en blanco al final
  }
}
