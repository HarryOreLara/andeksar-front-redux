import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Estandar,
  Solicitud,
} from 'src/app/core/class/estandar/Estandar.class';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import { IGeneric, IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { ActivosState } from 'src/app/shared/enums';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private base_url = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  listarVehiculoService$(
    solicitud: Solicitud = new Solicitud({
      cadena: '',
      estado: ActivosState.ACTIVO,
    })
  ): Observable<Vehiculo[]> {
    const direccion = `${this.base_url}/Vehiculo/ListarVehiculo`;
    return this.httpClient
      .post<IGenericArrays<Vehiculo>>(direccion, solicitud)
      .pipe(
        map((response: IGenericArrays<Vehiculo>) => {
          response.data = response.data.map((item) => Vehiculo.fromJson(item));
          return response.data;
        })
      );
  }

  listarVehiculoDropdownService$(
    solicitud: Solicitud = new Solicitud({
      cadena: '',
      estado: ActivosState.ACTIVO,
    })
  ): Observable<Estandar[]> {
    const direccion = `${this.base_url}/Vehiculo/ListarVehiculoCombo`;

    return this.httpClient
      .post<IGenericArrays<Estandar>>(direccion, solicitud)
      .pipe(
        map((response: IGenericArrays<Estandar>) => {
          response.data = response.data.map((item) => Estandar.fromJson(item));
          return response.data;
        })
      );
  }

  listarEstadosVehiculoDropdownService$(): Observable<Estandar[]> {
    const direccion = `${this.base_url}/Vehiculo/ListarVehiculoEstadoCombo`;

    return this.httpClient.get<IGenericArrays<Estandar>>(direccion).pipe(
      map((response: IGenericArrays<Estandar>) => {
        response.data = response.data.map((item) => Estandar.fromJson(item));
        return response.data;
      })
    );
  }

  obtenerVehiculoByIdService$(id: number): Observable<Vehiculo> {
    const direccion = `${this.base_url}/Vehiculo/ObtenerVehiculo`;
    return this.httpClient
      .get<IGeneric<Vehiculo>>(direccion, { params: { Id: id.toString() } })
      .pipe(
        map((response: IGeneric<Vehiculo>) => {
          response.data = Vehiculo.fromJson(response.data);
          return response.data;
        })
      );
  }

  crearVehiculoService$(vehiculo: Vehiculo): Observable<boolean> {
    const direccion = `${this.base_url}/Vehiculo/Insert`;
    return this.httpClient.post<IGeneric<boolean>>(direccion, vehiculo).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  actualizarVehiculoService$(vehiculo: Vehiculo) {
    const direccion = `${this.base_url}/Vehiculo/Update`;
    return this.httpClient.put<IGeneric<boolean>>(direccion, vehiculo).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }




  eliminarVehiculoService$(id: number): Observable<boolean> {
    const direccion = `${this.base_url}/Vehiculo/Delete`;
    return this.httpClient
      .delete<IGeneric<boolean>>(direccion, { params: { Id: id } })
      .pipe(
        map((response: IGeneric<boolean>) => {
          return response.data;
        })
      );
  }
}
