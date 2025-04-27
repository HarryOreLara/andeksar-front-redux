import { Agencia } from 'src/app/core/class/agencias/agencias.class';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';



export const mapperToAgenciaEstandar = (agencia: Agencia): Estandar => {
  return new Estandar({
    id: agencia.id,
    descripcion: agencia.nombre,
  });
};




export const mapperToEstandarAgencia = (estandar: Estandar): Agencia => {
  return new Agencia({
    id: estandar.id,
    nombre: estandar.descripcion,
  });
}


export const mapperToVehiculoEstandar = (vehiculo: Vehiculo): Estandar => {
  return new Estandar({
    id: vehiculo.id,
    descripcion: vehiculo.placa,
  });
}

