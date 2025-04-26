import { IMenu } from './IMenu.interface';

export interface IPadre {
  items?: IMenu[];
  idMenu: number;
  nombre: string;
  idPadre: number;
}
