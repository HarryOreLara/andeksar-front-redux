import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  IDetailAgencyTrajectory,
  INewTrajectory,
} from 'src/app/core/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TrajectoryHelperService {
  private detailSubject = new Subject<IDetailAgencyTrajectory[]>();
  detail$ = this.detailSubject.asObservable();

  constructor() {}

  //Emisor
  emitDetail(detail: IDetailAgencyTrajectory[]) {
    this.detailSubject.next(detail);
  }

  //CREATE JSON
  generateJsonHelper(
    headerTrajectory: FormGroup<any>,
    agencyTrajectoryList: INewTrajectory[]
  ) {
    const { origen, destino, nombre, orientacion } = headerTrajectory.value;

    const detail: IDetailAgencyTrajectory[] = agencyTrajectoryList.map(
      (item, index) => ({
        id: 0,
        orden: index + 1,
        pasaPorIdSucursalVenta: {
          id: item.agencia.id,
          descripcion: item.agencia.nombre,
        },
        tiempoLlegada: item.viaje,
        tiempoEstibaDesestiba: item.estiba,
        totalTiempoAcumulado: this.calculateTimeAcumulatedDetail(
          item.viaje,
          item.estiba
        ), // Si necesitas calcularlo, lo harías aquí
        trayectoriaTipo: item.trayectoriaTipo, // Este campo lo debes ajustar según la lógica de tu aplicación
      })
    );

    const json = {
      id: 0,
      nombre: nombre,
      origen: {
        id: origen.id,
        descripcion: origen.nombreAgencia,
        estado: origen.fK_EstadoAgencia === 1, // Estado derivado de `fK_EstadoAgencia`
        createdAt: origen.fechaCreacion,
      },
      destino: {
        id: destino.id,
        descripcion: destino.nombreAgencia,
        estado: destino.fK_EstadoAgencia === 1, // Estado derivado de `fK_EstadoAgencia`
        createdAt: destino.fechaCreacion,
      },
      totalOficinas: detail.length, // Total de oficinas basado en la cantidad de detalles
      orientacion: orientacion.id, // Ajusta esto según tu estructura
      detalle: detail,
    };

    return json;
  }

  calculateTimeAcumulatedDetail(
    tiempoLlegada: string,
    tiempoEstibaDesestiba: string
  ) {
    return (
      this.convertTimeToMinutes(tiempoLlegada) +
      this.convertTimeToMinutes(tiempoEstibaDesestiba)
    );
  }

  convertTimeToMinutes(time: string) {
    const [hours, minutes] = time.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
  }

  setTrajectoryHelper(headerTrajectory: FormGroup<any>) {
    const { origen, destino, orientacion } = headerTrajectory.value;

    const newOrigen: INewTrajectory = {
      agencia: origen,
      viaje: '00:00',
      estiba: '00:00',
      isFixed: true,
      isUpdating: false,
      isRemovable: false,
      orientacion: orientacion.name,
      trayectoriaTipo: 1,
    };

    const newDestino: INewTrajectory = {
      agencia: destino,
      viaje: '00:00',
      estiba: '00:00',
      isFixed: false,
      isRemovable: false,
      isUpdating: false,
      orientacion: orientacion.name,
      trayectoriaTipo: 3,
    };

    return { newOrigen, newDestino, origen, destino };
  }
}
