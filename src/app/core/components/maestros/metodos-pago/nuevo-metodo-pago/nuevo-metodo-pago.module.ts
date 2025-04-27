import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { NuevoMetodoPagoComponent } from './nuevo-metodo-pago.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedPipesModule } from 'src/app/shared/pipes/shared.pipes.module';

@NgModule({
  declarations: [NuevoMetodoPagoComponent],
  imports: [CommonModule, MaestrosPrimeNgModule, ReactiveFormsModule, SharedPipesModule],
  exports: [NuevoMetodoPagoComponent],
  providers: [
    MessageService,
    ConfirmationService,
    AlertService
  ],
})
export class NuevoMetodoPagoModule {}
