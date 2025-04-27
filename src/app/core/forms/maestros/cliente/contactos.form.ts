import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contactos } from 'src/app/core/class/maestros';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

export const createContactoForm = (
  fb: FormBuilder,
  customValidatorsService: ValidatorsService
): FormGroup => {
  return fb.group({
    documento: [
      '',
      [Validators.required, customValidatorsService.validateForeignerCard],
    ],
    nombre: [
      '',
      [Validators.required, customValidatorsService.validateFullname],
    ],
    telefono: [
      '',
      [Validators.required, customValidatorsService.validatePhone],
    ],
  });
};

export const setContactosToArray = (
  contactos: Contactos[],
  fb: FormBuilder,
  customValidatorsService: ValidatorsService
) => {
  return contactos.map((contacto) =>
    fb.group({
      documento: [
        contacto.documento,
        [Validators.required, customValidatorsService.validateDni],
      ],
      nombre: [
        contacto.nombre,
        [Validators.required, customValidatorsService.validateFullname],
      ],
      telefono: [
        contacto.telefono,
        [Validators.required, customValidatorsService.validatePhone],
      ],
      idContacto: [contacto.idContacto],
      idCliente: [contacto.idCliente],
    })
  );
};
