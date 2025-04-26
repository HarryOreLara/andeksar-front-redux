import { Agencia } from '../../agencias/agencias.class';
import { Estandar, TypeDocumentResponseDto } from '../../estandar/Estandar.class';
import { UnidadMedida } from '../../unidad-medida/UnidadMedida.class';

export class IngresosEgresos {
  id: number;
  nroOperacion: number;
  fecha: string;
  agencia:Agencia;
  tipoMovimiento: Estandar;
  cuentaGeneral: Estandar;
  cuentaDetalle: Estandar;
  detalleGlosa: string;
  tipoDocumentoSerie: UnidadMedida;
  serie: string;

  cuentaDestino: string;
  importeEgreso: number;
  importeIngreso: number;
  importeEfectivo: number;
  abonosBCP: number;
  abonosBBVA: number;
  abonosSCOTIA: number;
  guiaRemision: string;
  detalle: string;

  constructor(ingresosEgresos: Partial<IngresosEgresos> = {}) {
    this.id = ingresosEgresos.id || 0;
    this.nroOperacion = ingresosEgresos.nroOperacion || 0
    this.fecha = ingresosEgresos.fecha || '';
    this.agencia = ingresosEgresos.agencia || new Agencia();
    this.tipoMovimiento = ingresosEgresos.tipoMovimiento || new Estandar();
    this.cuentaGeneral = ingresosEgresos.cuentaGeneral || new Estandar();
    this.cuentaDetalle = ingresosEgresos.cuentaDetalle || new Estandar();
    this.detalleGlosa = ingresosEgresos.detalleGlosa || '';
    this.tipoDocumentoSerie =
      ingresosEgresos.tipoDocumentoSerie || new UnidadMedida();
    this.serie = ingresosEgresos.serie || '';
    this.cuentaDestino = ingresosEgresos.cuentaDestino || '';
    this.importeEgreso = ingresosEgresos.importeEgreso || 0;
    this.importeIngreso = ingresosEgresos.importeIngreso || 0;
    this.importeEfectivo = ingresosEgresos.importeEfectivo || 0;
    this.abonosBCP = ingresosEgresos.abonosBCP || 0;
    this.abonosBBVA = ingresosEgresos.abonosBBVA || 0;
    this.abonosSCOTIA = ingresosEgresos.abonosSCOTIA || 0;
    this.guiaRemision = ingresosEgresos.guiaRemision || '';
    this.detalle = ingresosEgresos.detalle || '';
  }

  static fromJson(data: any): IngresosEgresos {
    return new IngresosEgresos({
      id: data.id,
      nroOperacion: data.nroOperacion,
      fecha: data.fecha,
      agencia: data.agencia,
      tipoMovimiento: data.tipoMovimiento,
      cuentaGeneral: data.cuentaGeneral,
      cuentaDetalle: data.cuentaDetalle,
      detalleGlosa: data.detalleGlosa,
      tipoDocumentoSerie: data.tipoDocumentoSerie,
      serie: data.serie,
      cuentaDestino: data.cuentaDestino,
      importeEgreso: data.importeEgreso,
      importeIngreso: data.importeIngreso,
      importeEfectivo: data.importeEfectivo,
      abonosBCP: data.abonosBCP,
      abonosBBVA: data.abonosBBVA,
      abonosSCOTIA: data.abonosSCOTIA,
      guiaRemision: data.guiaRemision,
      detalle: data.detalle,
    });
  }

  static toJson(ingresosEgresos:any): IngresosEgresos {
    return new IngresosEgresos({
      id: ingresosEgresos.id ?? 0,
      nroOperacion: ingresosEgresos.nroOperacion,
      fecha: ingresosEgresos.fecha,
      agencia: ingresosEgresos.agencia.id,
      tipoMovimiento: ingresosEgresos.tipoMovimiento.id,
      cuentaGeneral: ingresosEgresos.cuentaGeneral.id,
      cuentaDetalle: ingresosEgresos.cuentaDetalle.id,
      detalleGlosa: ingresosEgresos.detalleGlosa,
      tipoDocumentoSerie: ingresosEgresos.tipoDocumentoSerie.id,
      serie: ingresosEgresos.serie,
      cuentaDestino: ingresosEgresos.cuentaDestino,
      importeEgreso: ingresosEgresos.importeEgreso,
      importeIngreso: ingresosEgresos.importeIngreso,
      importeEfectivo: ingresosEgresos.importeEfectivo,
      abonosBCP: ingresosEgresos.abonosBCP,
      abonosBBVA: ingresosEgresos.abonosBBVA,
      abonosSCOTIA: ingresosEgresos.abonosSCOTIA,
      guiaRemision: ingresosEgresos.guiaRemision,
      detalle: ingresosEgresos.detalle,
    });
  }


}
