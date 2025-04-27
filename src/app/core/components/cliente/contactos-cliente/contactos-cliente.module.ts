import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosClienteComponent } from './contactos-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';

@NgModule({
  declarations: [ContactosClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaestrosPrimeNgModule,
  ],
  exports: [ContactosClienteComponent],
  providers: [
    MessageService,
    ConfirmationService,
    AlertService,
    
  ],
})
export class ContactosClienteModule {}
