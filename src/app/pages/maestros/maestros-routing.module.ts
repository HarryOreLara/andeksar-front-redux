import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cliente',
    loadChildren:()=>import('./cliente/cliente.module').then(m=>m.ClienteModule)
  },
  {
    path:'vehiculo',
    loadChildren:()=>import('./vehiculo/vehiculo.module').then(m=>m.VehiculoModule)
  },

  {
    path:'agencias',
    loadChildren:()=>import('./agencias/agencias.module').then(m=>m.AgenciasModule)
  },
  {
    path:'metodos-pago',
    loadChildren:()=>import('./metodos-pago/metodos-pago.module').then(m=>m.MetodosPagoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestrosRoutingModule { }
