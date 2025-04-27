import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoClienteComponent } from './nuevo-cliente.component';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactosClienteModule } from '../contactos-cliente/contactos-cliente.module';
import { DireccionesClienteModule } from '../direcciones-cliente/direcciones-cliente.module';

import { CustomDropdownsModule } from 'src/app/core/widgets/dropdowns/custom-dropdowns.module';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { AgenciaService } from 'src/app/services/agencia/agencia.service';

@NgModule({
  declarations: [NuevoClienteComponent],
  imports: [
    CommonModule,
    MaestrosPrimeNgModule,
    ReactiveFormsModule,
    FormsModule,
    ContactosClienteModule,
    DireccionesClienteModule,
    CustomDropdownsModule,
  ],
  providers: [AgenciaService, ValidatorsService],
  exports: [NuevoClienteComponent],
})
export class NuevoClienteModule {}
