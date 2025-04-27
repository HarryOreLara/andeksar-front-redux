import { Estandar } from '../../class/estandar/Estandar.class';
import { Chofer } from '../../class/personal/trabajador/Chofer.class';
import { Trabajador } from '../../class/personal/trabajador/Trabajador.class';

export const CTRABAJADOR_CONSTANT: Trabajador[] = [
  new Trabajador({
    id: 1,
    nombreCompleto: 'SIDAME HARRY ORE LARA',
    tipoDocumento: new Estandar({
      id: 52,
      descripcion: 'Doc. Nacional de Identidad',
    }),
    documento: '73617110',
    fechaContratacion: new Date( '2025-02-06T05:00:00.000Z'),
    genero: 'M',
    clave: '',
    isChofer: true,
    chofer: new Chofer( {
      id: 0,
      nroLicenciaConducir: '234234LKJ',
      fechaExpiracionLicencia:  new Date('2025-02-28T05:00:00.000Z'),
      tipoLicencia: new Estandar({
        id: 1,
        descripcion: 'A1',
      }),
    }),
  }),
];
