import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolesPipe } from './soles/soles.pipe';
import { KilogramoPipe } from './kilogramo/kilogramo.pipe';
import { ComprobantePipe } from './comprobante/comprobante.pipe';
import { PalabrasTruncasPipe } from './palabras/palabras.pipe';
import { TimeFormatPipe } from './time-format/time-format.pipe';
import { NroCuentaBancoPipe } from './nro-cuenta-banco/nro-cuenta-banco.pipe';
import { BotonesComprobantePipe } from './componentes/botones/comprobante/botones-comprobante.pipe';
import { SanitizerUrlPipe } from './sanitizerUrl/sanitizer-url.pipe';
import { RechazadoComprobantePipe } from './componentes/alerts/rechazado-comprobante/rechazado-comprobante.pipe';

@NgModule({
  declarations: [
    SolesPipe,
    KilogramoPipe,
    ComprobantePipe,
    PalabrasTruncasPipe,
    TimeFormatPipe,
    NroCuentaBancoPipe,
    BotonesComprobantePipe,
    SanitizerUrlPipe,
    RechazadoComprobantePipe,
    
  ], // Declara el pipe aquí
  imports: [CommonModule],
  exports: [
    SolesPipe,
    KilogramoPipe,
    ComprobantePipe,
    PalabrasTruncasPipe,
    TimeFormatPipe,
    NroCuentaBancoPipe,
    BotonesComprobantePipe,
    SanitizerUrlPipe,
    RechazadoComprobantePipe


  ], // Exporta el pipe para que esté disponible en otros módulos
})
export class SharedPipesModule {}
