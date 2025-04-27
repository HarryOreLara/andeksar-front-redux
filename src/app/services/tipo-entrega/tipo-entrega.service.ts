import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { CustomErrorService } from 'src/app/shared/Errors/custom_error.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipoEntregaService {
  base_url: string = environment.URL_BACKEND;

  constructor(
    private readonly httpClient: HttpClient,
    private customErrorService: CustomErrorService
  ) {}



  listarTipoEntregaService$(): Observable<Estandar[]> {
    const direccion = `${this.base_url}/TipoEntrega/ListarComboTipoEntrega`;
    return this.httpClient
      .get<IGenericArrays<Estandar>>(direccion)
      .pipe(
        map((response:IGenericArrays<Estandar>)=>{
          response.data = response.data.map((item:Estandar)=>new Estandar(item));
          return response.data;
        })
      )
  }
}
