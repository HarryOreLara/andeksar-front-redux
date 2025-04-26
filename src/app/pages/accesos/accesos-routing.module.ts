import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuario-rol',
    loadChildren: () =>
      import('./usuario-rol/usuario-rol.module').then(
        (m) => m.UsuarioRolModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },

  {
    path: 'perfiles',
    loadChildren: () =>
      import('./perfiles/perfiles.module').then((m) => m.PerfilesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesosRoutingModule {}
