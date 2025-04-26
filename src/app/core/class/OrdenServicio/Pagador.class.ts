export class Pagador {
    idCliente: number;
    pagador: string;
    documento: string;
  
    constructor(pagador: Partial<Pagador> = {}) {
      this.idCliente = pagador.idCliente || 0;
      this.pagador = pagador.pagador || '';
      this.documento = pagador.documento || '';
    }
  
    static fromJson(data: any): Pagador {
      return new Pagador({
        idCliente: data.idCliente,
        pagador: data.pagador,
        documento: data.documento,
      });
    }
  
    static toJson(pagador: any): any {
      return {
        idCliente: pagador.idCliente,
        pagador: pagador.pagador,
      };
    }
  }
  