import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { UbigeoState } from 'src/app/shared/enums/ubigeo.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UbigeoService {
  private baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  listarUbigeoByIdPadre(
    ubigeoState: UbigeoState = UbigeoState.Departamento,
    idPadre: number = 0
  ): Observable<Estandar[]> {
    const data = {
      tipo: ubigeoState,
      idPadre: idPadre,
    };
    const direccion = `${this.baseUrl}/Ubigeo/ListarUbigeoByTipoByIdPadre`;
    return this.httpClient.post<IGenericArrays<Estandar>>(direccion, data).pipe(
      map((response) => {
        response.data = response.data.map((item) => Estandar.fromJson(item));
        return response.data;
      })
    );
  }
}
