import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export const createNuevaFormaPagoForm = (
    formaPagoForm:FormBuilder
):FormGroup =>{
    return formaPagoForm.group({
        // nombre:['',[Validators.required]],
        // cuentaBanco:['',[Validators.required]],
        // descripcion:['',[Validators.required]],
        // estado:['',[Validators.required]],
    });
}