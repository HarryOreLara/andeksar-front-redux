import { BuscarProgramacion } from "src/app/core/class/operaciones/programaciones/BuscarProgramacion.class";

export const mapperToProgramacionBuscarProgramacion = (buscarProgramacion: any): BuscarProgramacion => {
  return new BuscarProgramacion({
    // id: buscarProgramacion.id,
    // origen: buscarProgramacion.origen,
    // destino: buscarProgramacion.destino,
  });
};

