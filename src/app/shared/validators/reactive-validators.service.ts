import { Injectable } from '@angular/core';
import { ValidatorsService } from './validators.service';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ReactiveValidatorsService {
  constructor(private customValidatorsService: ValidatorsService) {}

  updateValidators(clienteForm: FormGroup, id: number): void {

    this.clearAllValidators(clienteForm);

    switch (id) {
      case 52:
        clienteForm.get('nombre')?.setValidators([Validators.required]);
        clienteForm.get('apellidos')?.setValidators([Validators.required]);
        clienteForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateDni,
          ]);
        break;
      case 54:
        clienteForm.get('razonSocial')?.setValidators([Validators.required]);
        clienteForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateRUC,
          ]);
        break;
      case 55:
        clienteForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validatePassport,
          ]);
        break;
      case 53:
        clienteForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateForeignerCard,
          ]);
        break;
      default:
        clienteForm
          .get('nombre')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateName,
          ]);
        clienteForm
          .get('apellidos')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateLastName,
          ]);

        break;
    }

    this.updateAllValidators(clienteForm);
  }

  private clearAllValidators(form: FormGroup): void {
    form.get('nombre')?.clearValidators();
    form.get('apellidos')?.clearValidators();
    form.get('razonSocial')?.clearValidators();
    form.get('documento')?.clearValidators();
  }

  private updateAllValidators(form: FormGroup): void {
    form.get('nombre')?.updateValueAndValidity();
    form.get('apellidos')?.updateValueAndValidity();
    form.get('razonSocial')?.updateValueAndValidity();
    form.get('documento')?.updateValueAndValidity();
  }
}
