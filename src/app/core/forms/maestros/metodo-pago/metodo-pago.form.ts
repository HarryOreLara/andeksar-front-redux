import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivosState } from 'src/app/shared/enums';

export const createNuevoMetodoPagoForm = (
  metodoPagoForm: FormBuilder,
): FormGroup => {
  return metodoPagoForm.group({
    nombre: ['', [Validators.required]],
    cuentaBanco: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  });
};
