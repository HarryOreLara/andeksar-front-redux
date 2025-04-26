export class Piloto{
    id:number;
    nombre:string;
    apeliidoMaterno:string;
    apellidoPaterno:string;
    estado:boolean
    documento:string;


    constructor(piloto:Partial<Piloto> = {}){
        this.id = piloto.id ?? 0;
        this.nombre = piloto.nombre ?? '';
        this.apeliidoMaterno = piloto.apeliidoMaterno ?? '';
        this.apellidoPaterno = piloto.apellidoPaterno ?? '';
        this.estado = piloto.estado ?? false;
        this.documento = piloto.documento ?? '';
    }


    static fromJson(piloto:Piloto):Piloto{
        return new Piloto({
            id:piloto.id,
            nombre:piloto.nombre,
            apeliidoMaterno:piloto.apeliidoMaterno,
            apellidoPaterno:piloto.apellidoPaterno,
            estado:piloto.estado,
            documento:piloto.documento
        });
    }


    static toJson(piloto:Piloto):any{
        return {
            id:piloto.id,
            nombre:piloto.nombre,
            apeliidoMaterno:piloto.apeliidoMaterno,
            apellidoPaterno:piloto.apellidoPaterno,
            estado:piloto.estado,
            documento:piloto.documento
        }
    }

}