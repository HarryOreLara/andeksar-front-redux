import { NgModule } from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { ToastModule } from 'primeng/toast';
@NgModule({
  exports: [
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    StyleClassModule,
    DividerModule,
    PasswordModule,
    SpinnerModule,
    ToastModule
  ],
})
export class AuthPrimengModule {}
