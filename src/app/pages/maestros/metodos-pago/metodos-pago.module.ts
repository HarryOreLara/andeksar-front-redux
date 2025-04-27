import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetodosPagoComponent } from './metodos-pago.component';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { FormsModule } from '@angular/forms';
import { SharedMaestrosModule } from 'src/app/core/components/maestros/shared-maestros.module';
import { MetodosPagoRoutingModule } from './metodos-pago-routing.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared.pipes.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';

@NgModule({
  declarations: [MetodosPagoComponent],
  imports: [
    CommonModule,
    MetodosPagoRoutingModule,
    MaestrosPrimeNgModule,
    SharedPipesModule,
    FormsModule,
    SharedMaestrosModule,
  ],
  providers: [MessageService, ConfirmationService, AlertService],
})
export class MetodosPagoModule {}
