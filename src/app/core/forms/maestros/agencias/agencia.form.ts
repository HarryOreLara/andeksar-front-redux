import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const createNuevaAgenciaForm = (agenciaForm: FormBuilder): FormGroup => {
  return agenciaForm.group({
    nombre: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    direccion: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    departamento: ['',[Validators.required]],
    provincia: ['',[Validators.required]],
    horarioInicio: ['',[Validators.required]],
    horarioTermino: ['',[Validators.required]],
    longitud: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    latitud: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    tipoAgencia: ['',[Validators.required]],
    agenciaPadre: [''],
  });
};
