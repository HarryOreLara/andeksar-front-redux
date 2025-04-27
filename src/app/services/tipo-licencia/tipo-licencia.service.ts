import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipoLicenciaService {
  base_url: string = environment.URL_BACKEND;

  constructor(private readonly httpClient: HttpClient) {}

  listarTipoLicenciaDropdownService$(): Observable<Estandar[]> {
    const direccion = `${this.base_url}/Trabajador/ListarLicencia`;
    return this.httpClient.get<IGenericArrays<Estandar>>(direccion).pipe(
      map((response: IGenericArrays<Estandar>) => {
        response.data = response.data.map((tipoLicencia) =>
          Estandar.fromJson(tipoLicencia)
        );
        return response.data;
      })
    );
  }
}
