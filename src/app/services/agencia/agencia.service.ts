import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Agencia } from 'src/app/core/class/agencias/agencias.class';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { IGeneric, IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { ActivosState } from 'src/app/shared/enums';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AgenciaService {
  base_url: string = environment.URL_BACKEND;
  auth_url: string = environment.URL_AUTH;

  constructor(
    private readonly httpClient: HttpClient,
    // private customErrorService: CustomErrorService
  ) {}



  obtenerAgenciaService$(id: number): Observable<Agencia> {
    const direccion = `${this.base_url}/Agencia/ObtenerAgencia`;
    return this.httpClient
      .get<IGeneric<Agencia>>(direccion, { params: { id } })
      .pipe(
        map((response: IGeneric<Agencia>) => {
          response.data = Agencia.fromJson(response.data);
          return response.data;
        })
      );
  }

  listarAgenciaService$(
    activoState: ActivosState = ActivosState.ACTIVO
  ): Observable<Agencia[]> {
    const direccion = `${this.base_url}/Agencia/ListarAgencia`;
    return this.httpClient
      .get<IGenericArrays<Agencia>>(direccion, {
        params: { estado: activoState },
      })
      .pipe(
        map((response: IGenericArrays<Agencia>) => {
          response.data = response.data.map((item) => {
            return Agencia.fromJson(item);
          });
          return response.data;
        })
      );
  }

  listarAgenciaServiceDropdown$(
    activoState: ActivosState = ActivosState.ACTIVO
  ): Observable<Estandar[]> {
    const direccion = `${this.base_url}/Agencia/ListarAgenciaCombo`;
    return this.httpClient
      .get<IGenericArrays<Estandar>>(direccion, {
        params: { estado: activoState },
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

  insertAgenciaService$(data: Agencia): Observable<IGeneric<boolean>> {
    const direccion = `${this.base_url}/Agencia/Insert`;
    return this.httpClient.post<IGeneric<boolean>>(direccion, data).pipe(
      map((response: IGeneric<boolean>) => {
        return response;
      })
    );
  }

  updateAgenciaService$(data: any): Observable<string> {
    const direccion = `${this.base_url}/Agencia/Update`;
    return this.httpClient
      .put<string>(direccion, data)
      // .pipe(catchError(this.handleError));
  }





  deleteAgenciaService$(id: number): Observable<boolean> {
    const direccion = `${this.base_url}/Agencia/Delete`;
    return this.httpClient
      .delete<IGeneric<boolean>>(direccion, { params: { id } })
      .pipe(
        map((response: IGeneric<boolean>) => {
          return response.data;
        }),
      );
  }


  listarAgenciaByDocTrabajadorService$(
    documento: string
  ): Observable<Estandar[]> {
    const direccion = `${this.auth_url}/Seguridad/ListarAgenciaByDocumentoTrabajador`;
    return this.httpClient
      .get<IGenericArrays<Estandar>>(direccion, { params: { documento } })

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
