import { TipoComprobanteState } from 'src/app/shared/enums';
import { Comprobante } from '../../operaciones/Comprobante.class';
import { Estandar } from '../../estandar/Estandar.class';

export class BajaComprobante {
  comprobante: Comprobante;
  tipoBaja: Estandar;
  motivo: Estandar;

  constructor(bajaComprobante: Partial<BajaComprobante> = {}) {
    this.comprobante = bajaComprobante.comprobante ?? new Comprobante();
    this.tipoBaja = bajaComprobante.tipoBaja ?? new Estandar();
    this.motivo = bajaComprobante.motivo ?? new Estandar();
  }

  static toJson(bajaComprobante: BajaComprobante): any {
    return {
      idComprobante: bajaComprobante.comprobante.id,
      idTipoBaja: bajaComprobante.tipoBaja.id,
      idMotivo: bajaComprobante.motivo.id,
    };
  }
}
