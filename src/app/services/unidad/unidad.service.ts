import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { TablaSunat } from 'src/app/shared/enums';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnidadMedidaService {
  private base_url: string = environment.URL_BACKEND;

  constructor(private readonly httpClient: HttpClient) {}

  listarUnidadMedidaService$(tablaSunat: TablaSunat): Observable<Estandar[]> {
    const unidad = `${this.base_url}/TablaSunat/ListarCatalogo`;
    return this.httpClient
      .get<IGenericArrays<Estandar>>(unidad, {
        params: { catalogo: tablaSunat },
      })
      .pipe(
        map((res: IGenericArrays<Estandar>) => {
          res.data = res.data.map((data) => Estandar.fromJson(data));
          return res.data;
        })
      );
  }
}
