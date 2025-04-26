import { FormGroup } from '@angular/forms';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';

export const convertToJsonEstandar = (
  form: FormGroup,
  perfilId: number
): Estandar => {
  const myEstandar = new Estandar({
    id: perfilId,
    descripcion: form.get('descripcion')?.getRawValue(),
    estado:true
  });

  return Estandar.toJson(myEstandar);
};
