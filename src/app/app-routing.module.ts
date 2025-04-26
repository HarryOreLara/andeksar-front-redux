import { NgModule,  } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { AppLayoutComponent } from './components/layout/app.layout.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('./pages/dashboard/dashboard.module').then(
      //       (m) => m.DashboardModule
      //     ),
      // },
      // {
      //   path: 'operaciones',
      //   loadChildren: () =>
      //     import('./pages/operaciones/operaciones.module').then(
      //       (m) => m.OperacionesModule
      //     ),
      // },
      // {
      //   path: 'personal',
      //   loadChildren: () =>
      //     import('./pages/personal/personal.module').then(
      //       (m) => m.PersonalModule
      //     ),
      // },
      // {
      //   path: 'maestros',
      //   loadChildren: () =>
      //     import('./pages/maestros/maestros.module').then(
      //       (m) => m.MaestrosModule
      //     ),
      // },
      {
        path: 'accesos',
        loadChildren: () =>
          import('./pages/accesos/accesos.module').then(
            (m) => m.AccesosModule
          ),
      },
      // {
      //   path: 'reportes',
      //   loadChildren: () =>import('./pages/reportes/reportes.module').then(m=>m.ReportesModule)
      // },
      // {
      //   path: 'caja',
      //   loadChildren: () =>
      //     import('./pages/caja/caja.module').then((m) => m.CajaModule),
      // }

    ],
  },
  // {
  //   path: 'not-found',
  //   loadChildren: () =>
  //     import('./pages/not-found/not-found.module').then(
  //       (m) => m.NotFoundModule
  //     ),
  // },
  {
    path:'**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
