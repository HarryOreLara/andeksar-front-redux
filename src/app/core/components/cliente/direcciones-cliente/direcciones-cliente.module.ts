import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionesClienteComponent } from './direcciones-cliente.component';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomDropdownsModule } from 'src/app/core/widgets/dropdowns/custom-dropdowns.module';

@NgModule({
  declarations: [DireccionesClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaestrosPrimeNgModule,
    CustomDropdownsModule,
  ],
  exports: [DireccionesClienteComponent],
  providers: [ConfirmationService, MessageService, AlertService],
})
export class DireccionesClienteModule {}
