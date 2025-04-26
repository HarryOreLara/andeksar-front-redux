import { Estandar } from '../../class/estandar/Estandar.class';
import { FormaPago } from '../../class/OrdenServicio/OrdenForm.class';
import { ICliente } from '../interfaces';

export interface IDetallePago {
  id: number;
  idCaja: number;
  fecha: string;
  importe: number;
  formaPago: FormaPago;
  detalle: Estandar;
  usuario: string;
  nroOperacion: string;
  fechaOperacion: string;
}
