import { ActivosState } from 'src/app/shared/enums';
import { IMethodPayment } from '../../interfaces/interfaces';
import { MetodoPago } from '../../class/pagos/MetodoPago.class';

export const CMETHOD_PAYMENT: IMethodPayment[] = [
  {
    id: 1,
    descripcion: 'Efectivo',
  },
  {
    id: 2,
    descripcion: 'Tarjeta de crédito o debito visa',
  },
  {
    id: 3,
    descripcion: 'Yape',
  },
  {
    id: 4,
    descripcion: 'Plin',
  },
  {
    id: 5,
    descripcion: 'CTA CORRIENTE',
  },
  {
    id: 6,
    descripcion: 'CTA DOLARES',
  },
  {
    id: 7,
    descripcion: 'BBVA SOLES',
  },
  {
    id: 8,
    descripcion: 'Scotiobank Soles',
  },
];



export const C_METODOS_PAGO:MetodoPago[] = [
  new MetodoPago({
    id: 1,
    nombre: 'Efectivo',
    icono: 'pi pi-money-bill',
    descripcion: ' Pago en efectivo en la entrega del producto.',
    cuentaBanco: '15452',
    estado: ActivosState.ACTIVO
  }),
  new MetodoPago({
    id: 2,
    nombre: 'Tarjeta de crédito o debito visa',
    icono: 'pi pi-credit-card',
    descripcion: ' Tarjetas de crédito o débito Visa, MasterCard, American Express, Diners Club, Discover, JCB, UnionPay, etc.',
    cuentaBanco:  '1212545125151234',
    estado: ActivosState.ACTIVO
  }),
  new MetodoPago({
    id: 3,
    nombre: 'Yape',
    icono: 'pi pi-mobile',
    descripcion: ' Pago a través de la aplicación Yape.',
    cuentaBanco: '987654321',
    estado: ActivosState.ACTIVO
  }),
  new MetodoPago({
    id: 4,
    nombre: 'Plin',
    icono: 'pi pi-mobile',
    descripcion: ' Pago a través de la aplicación Plin.',
    cuentaBanco: '987654321',
    estado: ActivosState.ACTIVO
  }),
  new MetodoPago({
    id: 5,
    nombre: 'CTA CORRIENTE',
    icono: 'pi pi-unlock',
    descripcion: ' Pago a través de una cuenta corriente.',
    cuentaBanco: '345436576867989',
    estado: ActivosState.ACTIVO
  }),
  new MetodoPago({
    id: 6,
    nombre: 'CTA DOLARES',
    icono: 'pi pi-unlock',
    descripcion: ' Pago a través de una cuenta en dólares.',
    cuentaBanco: '784151461545451',
    estado: ActivosState.INACTIVO
  }),
  new MetodoPago({
    id: 7,
    nombre: 'BBVA SOLES',
    icono: 'pi pi-unlock',
    descripcion: ' Pago a través de una cuenta en el banco BBVA en soles.',
    cuentaBanco: '465161641646461',
    estado: ActivosState.ACTIVO
  }),
  new MetodoPago({
    id: 8,
    nombre: 'Scotiobank Soles',
    icono: 'pi pi-unlock',
    descripcion: ' Pago a través de una cuenta en el banco Scotiobank en soles.',
    cuentaBanco: '87524278278567',
    estado: ActivosState.ACTIVO
  }),
]