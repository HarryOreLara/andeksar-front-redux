import { Pipe, PipeTransform } from '@angular/core';
import { BotonesComprobanteState, BzlinkState, ComprobanteState } from 'src/app/shared/enums';

@Pipe({
  name: 'botonesComprobante',
})
export class BotonesComprobantePipe implements PipeTransform {
  private ejecutarAccion(accion: string): void {
    console.log(`Acción ejecutada: ${accion}`);
  }

  transform(
    estadoComprobante: ComprobanteState,
    estadoBzlink: BzlinkState
  ): { label: string; class: string; icon: string; command: () => void }[] {
    switch (`${estadoComprobante}-${estadoBzlink}`) {
      case `${ComprobanteState.EMITIDO}-${BzlinkState.GENERADO}`:
      case `${ComprobanteState.EMITIDO}-${BzlinkState.RECHAZADA}`:
        return [
          {
            label: BotonesComprobanteState.ENVIO_BZLINK,
            class:
              'p-button-rounded bg-blue-500 border-blue-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-send',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
          {
            label: BotonesComprobanteState.VERIFICACION,
            class:
              'p-button-rounded bg-cyan-500 border-cyan-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-verified',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
        ];

      case `${ComprobanteState.EMITIDO}-${BzlinkState.ACEPTADA}`:
        return [
          {
            label: BotonesComprobanteState.DESCARGA,
            class:
              'p-button-rounded bg-pink-500 border-pink-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-download',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
          {
            label: BotonesComprobanteState.VISUALIZACION,
            class:
              'p-button-rounded bg-orange-500 border-orange-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-eye',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
        ];

      case `${ComprobanteState.ANULADO}-${BzlinkState.GENERADO}`:
        return [
          {
            label: BotonesComprobanteState.ENVIO_BZLINK,
            class:
              'p-button-rounded bg-blue-500 border-blue-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-send',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
        ];

      case `${ComprobanteState.ANULADO}-${BzlinkState.ACEPTADA}`:
        return [];

      case `${ComprobanteState.ANULADO}-${BzlinkState.RECHAZADA}`:
        return [
          {
            label: BotonesComprobanteState.ENVIO_BZLINK,
            class:
              'p-button-rounded bg-blue-500 border-blue-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-send',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
        ];
      case `${ComprobanteState.BAJA_NC}-${BzlinkState.GENERADO}`:
      case `${ComprobanteState.BAJA_NC}-${BzlinkState.RECHAZADA}`:
      case `${ComprobanteState.CARGO_ND}-${BzlinkState.GENERADO}`:
      case `${ComprobanteState.CARGO_ND}-${BzlinkState.RECHAZADA}`:
        return [
          {
            label: BotonesComprobanteState.ENVIO_BZLINK,
            class:
              'p-button-rounded bg-blue-500 border-blue-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-send',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
          {
            label: BotonesComprobanteState.VERIFICACION,
            class:
              'p-button-rounded bg-cyan-500 border-cyan-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-verified',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
        ];

      case `${ComprobanteState.BAJA_NC}-${BzlinkState.ACEPTADA}`:
      case `${ComprobanteState.CARGO_ND}-${BzlinkState.ACEPTADA}`:
        return [
          {
            label: BotonesComprobanteState.DESCARGA,
            class:
              'p-button-rounded bg-pink-500 border-pink-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-download',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
          {
            label: BotonesComprobanteState.VISUALIZACION,
            class:
              'p-button-rounded bg-orange-500 border-orange-500 p-button-raised justify-content-center mr-3 w-9rem',
            icon: 'pi pi-eye',
            command: () => this.ejecutarAccion('Envio Bzlink'),
          },
        ];
      default:
        return [];
    }
  }
}
