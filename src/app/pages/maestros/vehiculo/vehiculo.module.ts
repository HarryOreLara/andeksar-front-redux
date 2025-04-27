import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoComponent } from './vehiculo.component';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedMaestrosModule } from 'src/app/core/components/maestros/shared-maestros.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { AlertService } from 'src/app/shared/services/alert.service';


@NgModule({
  declarations: [
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    MaestrosPrimeNgModule,
    SharedMaestrosModule,
    SharedDirectivesModule
  ],
  providers:[MessageService, ConfirmationService, AlertService]
})
export class VehiculoModule { }
