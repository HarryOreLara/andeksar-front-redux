import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'register', loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule),}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
