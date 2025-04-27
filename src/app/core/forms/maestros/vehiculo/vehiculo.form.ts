import { FormBuilder, FormGroup } from '@angular/forms';

export const createNuevoVehiculoForm = (
  vehiculoForm: FormBuilder
): FormGroup => {
  return vehiculoForm.group({
    ejes: [],
    fechaInscripcion: [''],
    placa: [''],
    serieVehiculo: [''],
    marca: [''],
    modelo: [''],
    serieMotor: [''],
    externo: [false],
    estado:['']
  });
};
