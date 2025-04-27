import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesPrimeNgModule } from '../../../themes/modules/modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MessageService } from 'primeng/api';
import { PersonaContactoComponent } from './persona-contacto.component';

@NgModule({
  declarations: [PersonaContactoComponent],
  providers: [MessageService, AlertService],
  imports: [
    CommonModule,
    OperacionesPrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PersonaContactoComponent],
})
export class SharedPersonaContactoModule {}
