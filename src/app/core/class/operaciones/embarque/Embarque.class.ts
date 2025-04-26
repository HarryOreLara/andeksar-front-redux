import { OrdenServicio } from "../../OrdenServicio";


export class Embarque{
    id:number;
    ordenesServicio:OrdenServicio[];
    programacionId:number;



    constructor(embarque:Partial<Embarque>={}){
        this.id=embarque.id??0;
        this.ordenesServicio=embarque.ordenesServicio??[];
        this.programacionId=embarque.programacionId??0;
    }



    static fromJson(data:any):Embarque{
        return new Embarque({
            id:data.id,
            ordenesServicio:data.ordenesServicio,
            programacionId:data.programacionId
        });
    }



    static toJson(embarque:Embarque):any{
        return{
            id:embarque.id,
            ordenesServicio:embarque.ordenesServicio.map(orden=>orden.id),
            programacionId:embarque.programacionId
        };
    }

}