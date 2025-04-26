import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioRolComponent } from './usuario-rol.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioRolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRolRoutingModule {}
