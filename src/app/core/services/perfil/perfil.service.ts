import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estandar } from '../../class/estandar/Estandar.class';
import { IGeneric, IGenericArrays } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  base_url: string = environment.URL_BACKEND;

  constructor(private readonly httpClient: HttpClient) {}

  obtenerPerfilService$(id: number): Observable<Estandar> {
    let url = `${this.base_url}/Perfil/ObtenerPerfil`;

    return this.httpClient
      .get<IGeneric<Estandar>>(url, { params: { id } })
      .pipe(
        map((response: IGeneric<Estandar>) => {
          return Estandar.fromJson(response.data);
        })
      );
  }

  listarPerfilService$(): Observable<Estandar[]> {
    let url = `${this.base_url}/Perfil/ListarPerfil`;
    return this.httpClient
      .get<IGenericArrays<Estandar>>(url)
      .pipe(
        map((response: IGenericArrays<Estandar>) =>
          response.data.map((perfil) => Estandar.fromJson(perfil))
        )
      );
  }

  insertPerfilService$(perfil: Estandar): Observable<boolean> {
    let url = `${this.base_url}/Perfil/Insert`;

    return this.httpClient.post<IGeneric<boolean>>(url, perfil).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  updatePerfilService$(perfil: Estandar): Observable<boolean> {
    let url = `${this.base_url}/Perfil/Update`;

    return this.httpClient.put<IGeneric<boolean>>(url, perfil).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  deletePerfilService$(id: number):Observable<boolean> {
    let url = `${this.base_url}/Perfil/Delete`;
    return this.httpClient.delete<IGeneric<boolean>>(url, { params: { id } }).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }


  
  listarPerfilWithMenyByIdPerfilService$(id: number) {}
}
