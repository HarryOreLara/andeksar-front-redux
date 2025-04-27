import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Trayectoria } from 'src/app/core/class/operaciones/trayectoria/Trayectoria.class';
import { IGeneric, IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrayectoriaService {
  private base_url = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  listarTrayectoriaService$(
    trayectoria: Trayectoria
  ): Observable<Trayectoria[]> {
    const direccion = `${this.base_url}/Trayectoria/ListarByOrigenDestino`;
    return this.httpClient
      .post<IGenericArrays<Trayectoria>>(direccion, trayectoria)
      .pipe(
        map((response: IGenericArrays<Trayectoria>) => {
          response.data = response.data.map((item) =>
            Trayectoria.fromJson(item)
          );
          return response.data;
        })
      );
  }

  buscarTrayectoriaService$(trayectoria: Trayectoria): Observable<Estandar[]> {
    const direccion = `${this.base_url}/Trayectoria/BuscarByOrigenDestino`;
    return this.httpClient
      .post<IGenericArrays<Estandar>>(direccion, trayectoria)
      .pipe(
        map((response: IGenericArrays<Estandar>) => {
          response.data = response.data.map((item) => Estandar.fromJson(item));
          return response.data;
        })
      );
  }

  obtenerTrayectoriaByIdService$(id: number): Observable<Trayectoria> {
    const direccion = `${this.base_url}/Trayectoria/ObtenerById`;
    return this.httpClient
      .get<IGeneric<Trayectoria>>(direccion, { params: { Id: id.toString() } })
      .pipe(
        map((response: any) => {
          response.data = Trayectoria.fromJson(response.data);
          return response.data;
        })
      );
  }

  insertarTrayectoria$(trayectoria: Trayectoria): Observable<boolean> {
    const direccion = `${this.base_url}/Trayectoria/Insert`;
    return this.httpClient.post<IGeneric<boolean>>(direccion, trayectoria).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  actualizarTrayectoria$(data: Trayectoria): Observable<boolean> {
    const direccion = `${this.base_url}/Trayectoria/Update`;
    return this.httpClient.put<IGeneric<boolean>>(direccion, data).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  eliminarTrayectoria$(id: number): Observable<boolean> {
    const direccion = `${this.base_url}/Trayectoria/Eliminar`;
    return this.httpClient
      .delete<IGeneric<boolean>>(direccion, {
        params: { Id: id },
      })
      .pipe(
        map((response: IGeneric<boolean>) => {
          return response.data;
        })
      );
  }
}
