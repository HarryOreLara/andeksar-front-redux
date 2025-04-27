import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaFormaPagoComponent } from './nueva-forma-pago.component';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NuevaFormaPagoComponent
  ],
  imports: [
    CommonModule,
    MaestrosPrimeNgModule,
    ReactiveFormsModule
  ],
  exports: [
    NuevaFormaPagoComponent
  ]
})
export class NuevaFormaPagoModule { }
