import { NgModule } from '@angular/core';
import { TagStatusDirective } from './tag-status.directive';
import { TagActivoStateDirective } from './activo-inactivo.status.directive';
import { BooleanStatusDirective } from './boolean-status.directive';
import { VehiculoStatusDirective } from './vehiculo-status.directive';
import { ExternoStatusDirective } from './externo-status.directive';
import { ComprobanteStatusDirective } from './comprobantes/comprobante-status.directive';
import { BzlinkStatusDirective } from './comprobantes/bzlink-status.directive';
import { TipoComprobanteDirective } from './comprobantes/tipo-comprobante.directive';
import { GeneroTagDirective } from './genero.directive';
import { SiNoTagDirective } from './si-no.directive';

@NgModule({
  declarations: [
    TagStatusDirective,
    TagActivoStateDirective,
    BooleanStatusDirective,
    VehiculoStatusDirective,
    ExternoStatusDirective,
    ComprobanteStatusDirective,
    BzlinkStatusDirective,
    TipoComprobanteDirective,
    GeneroTagDirective,
    SiNoTagDirective
  ],
  imports: [],
  exports: [
    TagStatusDirective,
    TagActivoStateDirective,
    BooleanStatusDirective,
    VehiculoStatusDirective,
    ExternoStatusDirective,
    ComprobanteStatusDirective,
    BzlinkStatusDirective,
    TipoComprobanteDirective,
    GeneroTagDirective,
    SiNoTagDirective
  ],
})
export class SharedDirectivesModule {}
