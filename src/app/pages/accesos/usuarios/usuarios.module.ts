import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { AccesosPrimeNgModule } from 'src/app/core/themes/modules/modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    AccesosPrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsuariosModule {}
