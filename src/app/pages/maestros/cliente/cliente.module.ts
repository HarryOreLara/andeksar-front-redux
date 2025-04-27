import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteComponent } from './cliente.component';
import { MaestrosPrimeNgModule } from 'src/app/core/themes/modules/maestros/maestros_primeng.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { CustomErrorService } from 'src/app/shared/Errors/custom_error.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { ClienteRoutingModule } from './cliente-routing.module';
import { SharedClienteModule } from 'src/app/core/components/cliente/shared-cliente.module';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaestrosPrimeNgModule,
    SharedClienteModule,
    SharedDirectivesModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    AlertService,
    ClienteService,
    CustomErrorService,
    ValidatorsService,
  ],
})
export class ClienteModule {}
