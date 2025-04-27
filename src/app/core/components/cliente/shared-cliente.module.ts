import { NgModule } from '@angular/core';

import { NuevoClienteModule } from './nuevo-cliente/nuevo-cliente.module';
import { SharedPersonaContactoModule } from './persona-contacto/persona-contacto.module';
import { ContactosClienteModule } from './contactos-cliente/contactos-cliente.module';
import { DireccionesClienteModule } from './direcciones-cliente/direcciones-cliente.module';
import { CustomDropdownsModule } from '../../widgets/dropdowns/custom-dropdowns.module';

@NgModule({
  declarations: [],
  imports: [
    NuevoClienteModule,
    SharedPersonaContactoModule,
    ContactosClienteModule,
    DireccionesClienteModule,
    CustomDropdownsModule

  ],
  providers: [],
  exports: [
    NuevoClienteModule,
    SharedPersonaContactoModule,
    ContactosClienteModule,
    DireccionesClienteModule,
  ],
})
export class SharedClienteModule {}
