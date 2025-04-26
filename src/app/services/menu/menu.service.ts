import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IMenu } from 'src/app/core/interfaces/menu/IMenu.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  base_url: string = environment.URL_BACKEND;

  constructor(
    private readonly httpClient: HttpClient,

  ) {}

  listarMenuOrdenadoService$():Observable<IMenu[]>{
    let direccion = `${this.base_url}/Menu/ListarMenuOrdenado`;
    return this.httpClient.post<IMenu[]>(direccion,{}).pipe(
      catchError((err) => {
        // this.customErrorService.listError(err);
        return throwError(() => err);
      })
    );
  }
}
