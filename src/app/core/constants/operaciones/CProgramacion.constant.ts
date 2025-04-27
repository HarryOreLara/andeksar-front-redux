import { ActivosState } from 'src/app/shared/enums';
import { Estandar } from '../../class/estandar/Estandar.class';
import { Piloto } from '../../class/operaciones/programaciones/Piloto.class';
import { Programacion } from '../../class/operaciones/programaciones/Programacion.class';
import { Vehiculo } from '../../class/operaciones/programaciones/Vehiculo.class';

const programacion = new Programacion({
  id: 1,
  origen: new Estandar({
    id: 6,
    descripcion: 'Chao',
    estado: true,
  }),
  destino: new Estandar({
    id: 5,
    descripcion: 'Chimbote',
    estado: true,
  }),
  piloto: new Piloto({ id: 1, nombre: 'Piloto 1' }),
  copiloto: new Piloto({ id: 1, nombre: 'Copiloto 1' }),
  estado: ActivosState.ACTIVO,
  vehiculo: new Vehiculo({ id: 1, placa: 'Placa 1' }),
  fecha: new Date(),
  trayectoria: new Estandar({
    id: 1047,
    descripcion: 'CHAO - CHIMBOTE',
  }),
});

export const PROGRAMACIONES_CONSTANT: Programacion[] = [
  Programacion.fromJson(programacion),
];
