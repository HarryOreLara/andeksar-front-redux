import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRolComponent } from './usuario-rol.component';
import { UsuarioRolRoutingModule } from './usuario-rol-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { AccesosPrimeNgModule } from 'src/app/core/themes/modules/modules';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CustomDropdownsModule } from 'src/app/core/widgets/dropdowns/custom-dropdowns.module';
import { AlertService } from 'src/app/shared/services/alert.service';



@NgModule({
  declarations: [
    UsuarioRolComponent
  ],
  imports: [
    CommonModule,
    UsuarioRolRoutingModule,
    FormsModule,
    SpinnerModule,
    AccesosPrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    CustomDropdownsModule
  ],
  providers:[
    MessageService,
    ConfirmationService,
    AlertService
  ]
})
export class UsuarioRolModule { }
