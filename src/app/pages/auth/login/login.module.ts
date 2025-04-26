import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthPrimengModule } from 'src/app/core/themes/modules/modules';

import { MessageService } from 'primeng/api';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AuthPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
  ],
  providers: [MessageService, AlertService],
})
export class LoginModule {}
