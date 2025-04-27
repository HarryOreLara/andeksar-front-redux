import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciasRoutingModule } from './agencias-routing.module';
import { AgenciasComponent } from './agencias.component';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared.pipes.module';
import { SharedMaestrosModule } from 'src/app/core/components/maestros/shared-maestros.module';
import { AlertService } from 'src/app/shared/services/alert.service';

@NgModule({
  declarations: [AgenciasComponent],
  imports: [
    CommonModule,
    AgenciasRoutingModule,
    MaestrosPrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    SharedPipesModule,
    SharedMaestrosModule
  ],
  providers: [MessageService, ConfirmationService, AlertService],
})
export class AgenciasModule {}
