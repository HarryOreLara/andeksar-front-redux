export interface IOrdenServicio {
  id:number,
  fecha: Date; 
  nroOrden: string; 
  nroGuiaTransportista: string; 
  docRemitente: string; 
  origen: string; 
  destino: string; 
  remitente: string; 
  destinatario: string; 
  cantidadBultos: number; 
  precio: number; 
  comprobante: string; 
  estadoPagado: boolean; 
  fechaPago?: Date; 
  usuario: string; 
  nroManifiesto: string; 
}
