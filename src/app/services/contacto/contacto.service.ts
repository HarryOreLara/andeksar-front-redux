import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Contactos } from 'src/app/core/class/maestros';
import { IGeneric, IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { IContacto } from 'src/app/core/interfaces/maestros/IContacto.interface';
import { CustomErrorService } from 'src/app/shared/Errors/custom_error.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private base_url: string = environment.URL_BACKEND;
  private estado: number = 1;

  constructor(
    private readonly httppClient: HttpClient,
    private readonly customErrorService: CustomErrorService
  ) {}

  private handleError(error: any): Observable<never> {
    this.customErrorService.listError(error);
    return throwError(() => error);
  }

  obtenerContactoService$(Id: number): Observable<IContacto> {
    const direccion = `${this.base_url}/Contacto/ObtenerContacto`;
    return this.httppClient.get<IContacto>(direccion, { params: { Id } });
  }

  listarContactoService$(
    estado: number = this.estado
  ): Observable<IContacto[]> {
    const direccion = `${this.base_url}/Contacto/ListarContacto`;
    return this.httppClient.get<IContacto[]>(direccion, { params: { estado } });
  }

  insertContactoService$(data: any): Observable<any> {
    const direccion = `${this.base_url}/Contacto/Insert`;
    return this.httppClient.post<any>(direccion, data);
  }


  
  updateContactoService$(data: Contactos[]): Observable<boolean> {
    const direccion = `${this.base_url}/Contacto/Update`;
    return this.httppClient.put<IGeneric<boolean>>(direccion, data).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }



  deleteContactoService$(id: number): Observable<any> {
    const direccion = `${this.base_url}/Contacto/ActivoInactivo`;
    return this.httppClient.delete<any>(direccion, { params: { Id: id } });
  }

  listarContactoByIdService(idcliente: number): Observable<Contactos[]> {
    const direccion = `${this.base_url}/Contacto/ListarContactoByIdCliente`;
    return this.httppClient
      .post<IGenericArrays<Contactos>>(
        direccion,
        {},
        {
          params: {
            idcliente,
            estado: 1,
          },
        }
      )
      .pipe(
        map((response: IGenericArrays<Contactos>) => {
          response.data = response.data.map((item) => {
            return Contactos.fromJson(item);
          });
          return response.data;
        })
      );
  }
}
