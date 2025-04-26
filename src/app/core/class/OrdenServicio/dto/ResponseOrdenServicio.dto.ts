import { PagoState } from "src/app/shared/enums/pago.enum";
import { Cliente  } from "../../maestros/Cliente.class";
import { Estandar } from "../../estandar/Estandar.class";
import { DetallePago } from "../../pagos/DetallePago.class";

export class ResponseOrdenServicioDTO{
  id: number;
  precio: number;
  detallePago: DetallePago[];




    formaPago: Estandar;
    guiaRemitente: string;
    guia: string;
    remitente: Cliente;
    destinatario: Cliente;
    deudaActual: number;
    quienPaga: string;
    fecha: Date;
    nroOrden: string;
    nroGuiaTransportista: string;
    origen: string;
    destino: string;
    cantidadBultos: number;
    comprobante: string;
    estadoPagado: PagoState;
    metodoPago: Estandar;
    fechaPago: Date;
    nroManifiesto: string;
    usuario: string;
  
    constructor(
      responseOrdenServicioDTO: Partial<ResponseOrdenServicioDTO> = {}
    ) {

      this.id = responseOrdenServicioDTO.id || 0;
      this.precio = responseOrdenServicioDTO.precio || 0;
      this.detallePago = responseOrdenServicioDTO.detallePago || [];

      
      this.formaPago = responseOrdenServicioDTO.formaPago || new Estandar();
      this.guiaRemitente = responseOrdenServicioDTO.guiaRemitente || '';
      this.guia = responseOrdenServicioDTO.guia || '';
      this.remitente =
        responseOrdenServicioDTO.remitente || new Cliente();
      this.destinatario =
        responseOrdenServicioDTO.destinatario || new Cliente();
      this.deudaActual = responseOrdenServicioDTO.deudaActual || 0;
      this.quienPaga = responseOrdenServicioDTO.quienPaga || '';
      this.fecha = responseOrdenServicioDTO.fecha || new Date();
      this.nroOrden = responseOrdenServicioDTO.nroOrden || '';
      this.nroGuiaTransportista =
        responseOrdenServicioDTO.nroGuiaTransportista || '';
      this.origen = responseOrdenServicioDTO.origen || '';
      this.destino = responseOrdenServicioDTO.destino || '';
      this.cantidadBultos = responseOrdenServicioDTO.cantidadBultos || 0;
      this.comprobante = responseOrdenServicioDTO.comprobante || '';
      this.estadoPagado = responseOrdenServicioDTO.estadoPagado || PagoState.PENDIENTE;
      this.metodoPago = responseOrdenServicioDTO.metodoPago || new Estandar();
      this.fechaPago = responseOrdenServicioDTO.fechaPago || new Date();
      this.nroManifiesto = responseOrdenServicioDTO.nroManifiesto || '';
      this.usuario = responseOrdenServicioDTO.usuario || '';
    }
  
    static fromJSON(json: any): ResponseOrdenServicioDTO {
      let deudaActual = 0;
  
      if (json.id === 0) {
        deudaActual = json.precio || 0;
      } else {
        const totalPagado = (json.detallePago || []).reduce(
          (sum: number, detalle: any) => sum + (detalle.importe || 0),
          0
        );
        deudaActual = (json.precio || 0) - totalPagado;
      }
  
      return new ResponseOrdenServicioDTO({
        id: json.id,
        precio: json.precio,
        detallePago: json.detallePago,
        formaPago: json.formaPago,
        guiaRemitente: json.guiaRemitente, //TODO: Revisar
        guia: json.guia, //TODO: Revisar
        remitente: json.remitente,
        destinatario: json.destinatario,
        deudaActual: deudaActual, //TODO: Revisar
        quienPaga: json.pagador?.pagador || '',
        fecha: json.fecha,
        nroOrden: json.nroOrden,
        nroGuiaTransportista: json.nroGuiaTransportista,
        origen: json.origen,
        destino: json.destino,
        cantidadBultos: json.cantidadBultos,
        comprobante: json.comprobante,
        estadoPagado: json.estadoPagado,
        metodoPago: json.metodoPago,
        fechaPago: json.fechaPago,
        nroManifiesto: json.nroManifiesto,
        usuario: json.usuario,
      });
    }
  }
  