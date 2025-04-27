import { FormGroup } from '@angular/forms';
import { Agencia } from 'src/app/core/class/agencias/agencias.class';
import { Cliente, Contactos, Direcciones } from 'src/app/core/class/maestros';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import { FormaPago } from 'src/app/core/class/pagos/FormaPago.class';
import { MetodoPago } from 'src/app/core/class/pagos/MetodoPago.class';
import { ActivosState } from '../enums';

export const convertToJsonCliente = (
  clienteForm: FormGroup,
  clienteId: number
): Cliente => {
  const myCliente = new Cliente({
    id: clienteId,
    tipoDocumento: clienteForm.getRawValue()?.tipoDocumento,
    documento: clienteForm.getRawValue()?.documento.trim(),
    nombre: clienteForm.getRawValue()?.nombre,
    apellidos: clienteForm.getRawValue()?.apellidos,
    razonSocial: clienteForm.getRawValue()?.razonSocial,
    ubigeo: clienteForm.getRawValue()?.ubigeo,
    departamento: clienteForm.getRawValue()?.departamento,
    provincia: clienteForm.getRawValue()?.provincia,
    distrito: clienteForm.getRawValue()?.distrito,
    telefono: clienteForm.getRawValue()?.telefono.trim(),
    // direccion: clienteForm.getRawValue()?.direccion,
    credito: clienteForm.getRawValue()?.creditos,
  });

  return Cliente.toJson(myCliente);
};

export const convertToJsonArrayContactos = (
  contactosForm: FormGroup,
  clienteId: number
): Contactos[] => {
  const myArrayContactos = contactosForm.value.contactos.map(
    (contacto: Contactos) => ({
      idContacto: contacto.idContacto ? contacto.idContacto : 0,
      idCliente: clienteId,
      documento: contacto.documento,
      nombre: contacto.nombre,
      telefono: contacto.telefono,
    })
  );

  return Contactos.toJsonArray(myArrayContactos);
};



export const convertToDireccion = (
  direccionForm: FormGroup,
  clienteId: number
): Direcciones => {
  return new Direcciones({
    idDireccion: 0,
    idCliente: clienteId,
    direccion: direccionForm.getRawValue()?.direccion,
    departamento: direccionForm.getRawValue()?.departamento,
    provincia: direccionForm.getRawValue()?.provincia,
    ubigeoProvincia: direccionForm.getRawValue()?.provincia.id,
    isPrincipal: false,
  });
};





export const convertToJsonVehiculo = (
  form: FormGroup,
  vehiculoId: number
): Vehiculo => {
  const newVehiculo = new Vehiculo({
    id: vehiculoId,
    ejes: form.value?.ejes,
    fechaInscripcion: form.value?.fechaInscripcion,
    placa: form.value?.placa.trim(),
    serieVehiculo: form.value?.serieVehiculo,
    marca: form.value?.marca.trim(),
    modelo: form.value?.modelo.trim(),
    serieMotor: form.value?.serieMotor.trim(),
    externo: form.value?.externo,
    estado: form.value?.estado,
  });

  return Vehiculo.toJson(newVehiculo);
};

export const convertToJsonAgencia = (form: FormGroup, id: number): Agencia => {
  const newAgencia = new Agencia({
    id: id,
    nombre: form.value?.nombre.trim(),
    direccion: form.value?.direccion.trim(),
    horarioInicio: form.value?.horarioInicio,
    horarioTermino: form.value?.horarioTermino,
    departamento: form.value?.departamento,
    provincia: form.value?.provincia,
    activo: true,
    longitud: form.value?.longitud.trim(),
    latitud: form.value?.latitud.trim(),
    tipoAgencia: form.value?.tipoAgencia,
    agenciaPadre: form.value?.agenciaPadre,
  });

  return Agencia.toJson(newAgencia);
};

export const convertToJsonFormaPago = (form: FormGroup): FormaPago => {
  const newFormaPago = new FormaPago({
    nombre: form.value?.nombre.trim(),
    descripcion: form.value?.descripcion.trim(),
    estado: form.value?.estado,
  });

  return FormaPago.toJson(newFormaPago);
};

export const convertToJsonMetodoPago = (
  form: FormGroup,
  metodoPagoId: number,
  icono: string
): MetodoPago => {
  const newMetodoPago = new MetodoPago({
    id: metodoPagoId,
    nombre: form.value?.nombre.trim(),
    icono: icono,
    descripcion: form.value?.descripcion.trim(),
    cuentaBanco: form.value?.cuentaBanco.trim(),
    estado: form.value?.estado,
  });

  return MetodoPago.toJson(newMetodoPago);
};
