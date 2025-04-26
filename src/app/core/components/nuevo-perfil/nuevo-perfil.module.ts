import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesosPrimeNgModule } from 'src/app/core/themes/modules/modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NuevoPerfilComponent } from './nuevo-perfil.component';


@NgModule({
  declarations: [
    NuevoPerfilComponent
  ],
  imports: [
    CommonModule,
    AccesosPrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NuevoPerfilComponent
  ],
  providers: [
    MessageService,
    ConfirmationService,
    AlertService
  ]
})
export class NuevoPerfilModule { }
