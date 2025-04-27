import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nroCuentaBanco'
})
export class NroCuentaBancoPipe implements PipeTransform {

  transform(cardNumber: string): string {
    if (!cardNumber) return '';

    // Si el número de tarjeta es menor o igual a 9, lo devuelve tal cual
    if (cardNumber.length <= 9) {
      return cardNumber;
    }

    // Máscara para los dígitos excepto los últimos 4
    const visibleDigits = cardNumber.slice(-4); // Últimos 4 dígitos
    const maskedPart = '*'.repeat(cardNumber.length - 4); // Máscara para el resto

    return `${maskedPart}${visibleDigits}`;
  }
}
