import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const createDireccionForm = (fb: FormBuilder): FormGroup => {
  return fb.group({
    departamento: ['', [Validators.required]],
    provincia: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    ubigeoProvincia: ['', []],
  });
};
