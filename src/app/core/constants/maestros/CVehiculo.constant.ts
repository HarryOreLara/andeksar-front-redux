import { Estandar } from "../../class/estandar/Estandar.class";
import { Vehiculo } from "../../class/operaciones/programaciones/Vehiculo.class";


export const CVEHICULO_CONSTANT:Vehiculo[] = [
    new Vehiculo({
        id:1,
        ejes:2,
        fechaInscripcion:new Date(),
        placa:'ABC-123',
        serieVehiculo:'123456',
        marca:'Toyota',
        modelo:'Yaris',
        serieMotor:'123456',
        externo:false,
        estado: new Estandar({
            id:1,
            descripcion:'Activo'
        })
    }),
    new Vehiculo({
        id:2,
        ejes:2,
        fechaInscripcion:new Date(),
        placa:'DEF-456',
        serieVehiculo:'123456',
        marca:'Hyunday',
        modelo:'Santa Fe',
        serieMotor:'123456',
        externo:false,
        estado: new Estandar({
            id:1,
            descripcion:'Activo'
        })
    }),
    new Vehiculo({
        id:3,
        ejes:2,
        fechaInscripcion:new Date(),
        placa:'GHI-789',
        serieVehiculo:'123456',
        marca:'Kia',
        modelo:'Sportage',
        serieMotor:'123456',
        externo:false,
        estado: new Estandar({
            id:1,
            descripcion:'Activo'
        })
    }),
]