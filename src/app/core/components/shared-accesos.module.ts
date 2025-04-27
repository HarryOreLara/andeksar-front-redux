import { NgModule } from '@angular/core';
import { NuevoPerfilModule } from './accesos/nuevo-perfil/nuevo-perfil.module';

@NgModule({
  declarations: [],
  imports: [NuevoPerfilModule],
  providers: [],
  exports: [NuevoPerfilModule],
})
export class SharedAccesosModule {}
