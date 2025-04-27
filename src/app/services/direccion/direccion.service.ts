import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Direcciones } from 'src/app/core/class/maestros';
import {
  IDireccion,
  IGeneric,
  IGenericArrays,
} from 'src/app/core/interfaces/interfaces';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DireccionService {
  private base_url: string = environment.URL_BACKEND;

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  obtenerDireccionService$(id: number): Observable<IDireccion> {
    const direccion = `${this.base_url}/Direccion/ObtenerDireccion?Id=1`;
    return this.httpClient.get<any>(direccion);
  }


  listarDireccionByIdClienteService$(
    idcliente: number,
    estado: number = 2
  ): Observable<Direcciones[]> {
    const direccion = `${this.base_url}/Direccion/ListarDireccionByIdCliente`;
    return this.httpClient
      .post<IGenericArrays<Direcciones>>(direccion, {
        idcliente: idcliente,
        estado: estado,
      })
      .pipe(map((response: IGenericArrays<Direcciones>) => response.data));
  }


  listarDireccionService$(): Observable<Direcciones[]> {
    const direccion = `${this.base_url}/Direccion/ObtenerDireccion?Id=1`;
    return this.httpClient.get<Direcciones[]>(direccion);
  }

  insertDireccionService$(direcciones: Direcciones[]): Observable<boolean> {
    const url = `${this.base_url}/Direccion/Insert`;
    return this.httpClient.post<IGeneric<boolean>>(url, direcciones).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  updateDireccionService$(data: Direcciones[]): Observable<boolean> {
    const direccion = `${this.base_url}/Direccion/Update`;
    return this.httpClient.put<IGeneric<boolean>>(direccion, data).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  deleteDireccionService$(id: number): Observable<boolean> {
    const direccion = `${this.base_url}/Direccion/ActivoInactivo`;
    return this.httpClient
      .delete<IGeneric<boolean>>(direccion, { params: { Id: id } })
      .pipe(
        map((response: IGeneric<boolean>) => {
          return response.data;
        })
      );
  }


  listarByIdClienteByIdAgenciaService$(
    idCliente: number,
    idAgencia: number
  ): Observable<Estandar[]> {
    const direccion = `${this.base_url}/Direccion/ListarByIdClienteByIdAgencia`;
    return this.httpClient
      .post<IGenericArrays<Estandar>>(direccion, {
        idCliente: idCliente,
        idAgencia: idAgencia,
      })
      .pipe(
        map((response: IGenericArrays<Estandar>) => {
          response.data = response.data.map((item) => {
            return Estandar.fromJson(item);
          });
          return response.data;
        })
      );
  }
}
