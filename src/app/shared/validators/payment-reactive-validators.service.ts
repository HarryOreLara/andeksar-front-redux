import { Injectable } from '@angular/core';
import { ValidatorsService } from './validators.service';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PaymentReactiveValidatorsService {
  constructor(private customValidatorsService: ValidatorsService) {}

  updateValidators(paymentForm: FormGroup, id: number): void {

    this.clearAllValidators(paymentForm);

    switch (id) {
      case 1:
        paymentForm.get('nombre')?.setValidators([Validators.required]);
        paymentForm.get('apellidos')?.setValidators([Validators.required]);
        paymentForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateDni,
          ]);
        break;
      case 2:
        paymentForm.get('razonSocial')?.setValidators([Validators.required]);
        paymentForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateRUC,
          ]);
        break;
      case 3:
        paymentForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validatePassport,
          ]);
        break;
      case 4:
        paymentForm
          .get('documento')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateForeignerCard,
          ]);
        break;
      default:
        paymentForm
          .get('nombre')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateName,
          ]);
        paymentForm
          .get('apellidos')
          ?.setValidators([
            Validators.required,
            this.customValidatorsService.validateLastName,
          ]);

        break;
    }

    this.updateAllValidators(paymentForm);
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
