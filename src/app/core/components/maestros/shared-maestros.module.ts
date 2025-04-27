import { NgModule } from '@angular/core';
import { NuevoVehiculoModule } from './vehiculo/nuevo-vehiculo/nuevo-vehiculo.module';
import { NuevaFormaPagoModule } from './formas-pago/nueva-forma-pago/nueva-forma-pago.module';
import { NuevaAgenciaModule } from './agencias/nueva-agencia/nueva-agencia.module';
import { NuevoMetodoPagoModule } from './metodos-pago/nuevo-metodo-pago/nuevo-metodo-pago.module';

@NgModule({
  declarations: [],
  imports: [
    NuevoVehiculoModule,
    NuevaFormaPagoModule,
    NuevaAgenciaModule,
    NuevaFormaPagoModule,
    NuevoMetodoPagoModule,
  ],
  providers: [],
  exports: [
    NuevoVehiculoModule,
    NuevaFormaPagoModule,
    NuevaAgenciaModule,
    NuevaFormaPagoModule,
    NuevoMetodoPagoModule,
  ],
})
export class SharedMaestrosModule {}
