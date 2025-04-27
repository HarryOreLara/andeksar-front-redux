import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoVehiculoComponent } from './nuevo-vehiculo.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownsModule } from 'src/app/core/widgets/dropdowns/custom-dropdowns.module';
import { AlertService } from 'src/app/shared/services/alert.service';

@NgModule({
  declarations: [NuevoVehiculoComponent],
  imports: [
    CommonModule,
    MaestrosPrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    CustomDropdownsModule,
  ],
  exports: [NuevoVehiculoComponent],
  providers: [MessageService, ConfirmationService, AlertService],
})
export class NuevoVehiculoModule {}
