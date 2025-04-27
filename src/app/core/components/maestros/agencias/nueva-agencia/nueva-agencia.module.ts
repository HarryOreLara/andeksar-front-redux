import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

import { CustomDropdownsModule } from 'src/app/core/widgets/dropdowns/custom-dropdowns.module';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NuevaAgenciaComponent } from './nueva-agencia.component';



@NgModule({
  declarations: [
    NuevaAgenciaComponent
  ],
  imports: [
    CommonModule,
    MaestrosPrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    CustomDropdownsModule
  ],
  exports: [
    NuevaAgenciaComponent
  ],
  providers:[
    MessageService, ConfirmationService, AlertService
  ]
})
export class NuevaAgenciaModule { }
