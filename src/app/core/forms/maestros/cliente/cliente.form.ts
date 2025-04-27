import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

export const createClienteForm = (
  fb: FormBuilder,
  customValidatorsService: ValidatorsService
): FormGroup =>{
  return fb.group({
    tipoDocumento: ['', [Validators.required]],
    documento: ['', [Validators.required]],
    nombre: [
      { value: '', disabled: true },
      [customValidatorsService.validateName],
    ],
    apellidos: [
      { value: '', disabled: true },
      [customValidatorsService.validateLastName],
    ],
    razonSocial: [{ value: '', disabled: true }, [Validators.required]],
    ubigeo: [{ value: '', disabled: true }, []],
    departamento: ['', [Validators.required]],
    provincia: ['', [Validators.required], ],
    distrito: ['', [Validators.required]],
    telefono: [
      { value: '', disabled: true },
      [Validators.required, customValidatorsService.validatePhone],
    ],
    // direccion: [
    //   { value: '', disabled: true },
    //   [Validators.required, customValidatorsService.validateAddress],
    // ],
    credito: [{ value: false, disabled: true }, [Validators.required]],
  });
}

