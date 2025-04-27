import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export const createUsuarioRolForm = (fb: FormBuilder): FormGroup => {
    return fb.group({
        usuario: fb.control('', [Validators.required]),
        rol: fb.control('', [Validators.required]),
    });
}