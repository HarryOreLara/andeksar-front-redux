import { FormGroup, Validators } from "@angular/forms";
import { Estandar } from "src/app/core/class/estandar/Estandar.class";
import { TIPO_DOCUMENTO } from "../enums/tipo-documento.enum";

export const updateValidatorsTipoDocumentoTrabajador = (
    tipoDocumento:Estandar,
    trabajadorForm: FormGroup
):void => {

    if(tipoDocumento == null) return;

    const control = trabajadorForm.get?.('documento');

    switch (tipoDocumento.id) {
        case TIPO_DOCUMENTO.DNI://DNI
            control?.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
            break;
        case TIPO_DOCUMENTO.CARNET_EXTRANJERIA: //Carnet de extranjeria
            control?.setValidators([Validators.required, Validators.minLength(12), Validators.maxLength(12)]);
            break;
        case TIPO_DOCUMENTO.RUC://RUC
            control?.setValidators([Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
            break;
        case TIPO_DOCUMENTO.PASAPORTE://Pasaporte
            control?.setValidators([Validators.required, Validators.minLength(12), Validators.maxLength(12)]);
            break;
        default:
            break;
    }

    control?.updateValueAndValidity	();

}

export const updateValidatorsPayment = (
    metodoPago:Estandar,
    paymentForm: FormGroup
) =>{

    if(metodoPago == null) return;

    const nroOperacionControl = paymentForm.get?.('nroOperacion');
    const fechaOperacionControl = paymentForm.get?.('fechaOperacion');


    switch (metodoPago.id) {
        case 1:
            nroOperacionControl?.clearValidators();
            fechaOperacionControl?.clearValidators();
            nroOperacionControl?.setValue('');
            fechaOperacionControl?.setValue('');
            break;
        default:
            nroOperacionControl?.setValidators([Validators.required]);
            fechaOperacionControl?.setValidators([Validators.required]);
            break;
    }

    nroOperacionControl?.updateValueAndValidity();
    fechaOperacionControl?.updateValueAndValidity();

}