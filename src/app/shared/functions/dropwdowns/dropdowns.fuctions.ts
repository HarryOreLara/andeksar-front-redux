import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Trayectoria } from 'src/app/core/class/operaciones/trayectoria/Trayectoria.class';
import { mapperToEstandarAgencia } from '../../mappers/estandar.mapper';

export const convertToTrayectoriaDropwdown = (
  origen: Estandar,
  destino: Estandar
): Trayectoria => {


  const newOrigen = mapperToEstandarAgencia(origen);
  const newDestino = mapperToEstandarAgencia(destino);

  const myTrayectoria = new Trayectoria({
    origen: newOrigen,
    destino: newDestino,
    estado: 1,
  });

  return Trayectoria.toJson(myTrayectoria);
};



