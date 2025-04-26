import { Estandar } from "../estandar/Estandar.class";


export class Direcciones{
    idDireccion: number;
    idCliente: number;
    direccion: string;
    departamento: Estandar;
    provincia: Estandar;
    isPrincipal: boolean;

    constructor(direccion: Partial<Direcciones> = {}) {
        this.idDireccion = direccion.idDireccion || 0;
        this.idCliente = direccion.idCliente || 0;
        this.direccion = direccion.direccion || '';
        this.departamento = direccion.departamento || new Estandar();
        this.provincia = direccion.provincia || new Estandar();
        this.isPrincipal = direccion.isPrincipal || false;
    }

    static fromJson(data: any): Direcciones {
        return new Direcciones({
            idDireccion: data.idDireccion,
            idCliente: data.idCliente,
            direccion: data.direccion,
            departamento: Estandar.fromJson(data.departamento),
            provincia: Estandar.fromJson(data.provincia),
            isPrincipal: data.isPrincipal
        });
    }

    static toJson(direccion: Direcciones): any {
        return {
            idDireccion: direccion.idDireccion,
            idCliente: direccion.idCliente,
            direccion: direccion.direccion,
            departamento: direccion.departamento.id,
            provincia: direccion.provincia.id,
            isPrincipal: direccion.isPrincipal
        };
    }
}


