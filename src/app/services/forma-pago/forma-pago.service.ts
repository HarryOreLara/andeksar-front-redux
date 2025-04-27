import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormaPagoService {
  base_url: string = environment.URL_BACKEND;

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  obtenerFormaPagoService$(): Observable<Estandar[]> {
    const direccion = `${this.base_url}/FormaPago/ObtenerFormaPago`;
    return this.httpClient
      .get<IGenericArrays<Estandar>>(direccion)
      .pipe(map((response)=>{
        response.data = response.data.map((item)=>Estandar.fromJson(item));
        return response.data;
      }))
  }


  






}
