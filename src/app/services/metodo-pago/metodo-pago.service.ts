import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { MetodoPago } from 'src/app/core/class/pagos/MetodoPago.class';
import { IGeneric, IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MetodoPagoService {
  private base_url = environment.URL_BACKEND;

  private metodosPagoDropdownSubject$ = new BehaviorSubject<Estandar[]>([]);
  metodosPagoDropdown$ = this.metodosPagoDropdownSubject$.asObservable();

  constructor(private httpClient: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.listarMetodoPagoComboService$().pipe(take(1)).subscribe();
  }

  listarMetodoPagoComboService$(): Observable<Estandar[]> {
    const direccion = `${this.base_url}/MetodoPago/ListarComboMetodoPago`;
    return this.httpClient.get<IGenericArrays<Estandar>>(direccion).pipe(
      tap((response) => this.metodosPagoDropdownSubject$.next(response.data)),
      map((response: IGenericArrays<Estandar>) =>
        response.data.map((item) => Estandar.fromJson(item))
      )
    );
  }

  listarMetodosPagoService$(): Observable<MetodoPago[]> {
    const direccion = `${this.base_url}/MetodoPago/ListarMetodoPago`;
    return this.httpClient.get<IGenericArrays<MetodoPago>>(direccion).pipe(
      map((response: IGenericArrays<MetodoPago>) => {
        response.data = response.data.map((item) => MetodoPago.fromJson(item));
        return response.data;
      })
    );
  }

  obtenerMetodoPagoByIdService$(id: number): Observable<MetodoPago> {
    const direccion = `${this.base_url}/MetodoPago/ObtenerMetodoPagoById`;
    return this.httpClient
      .get<IGeneric<MetodoPago>>(direccion, { params: { Id: id.toString() } })
      .pipe(
        map((response: any) => {
          response.data = MetodoPago.fromJson(response.data);
          return response.data;
        })
      );
  }

  insertarMetodoPagoService$(metodoPago: MetodoPago): Observable<boolean> {
    const direccion = `${this.base_url}/MetodoPago/Insert`;
    return this.httpClient.post<IGeneric<boolean>>(direccion, metodoPago).pipe(
      map((response: IGeneric<boolean>) => {
        if (response.status !== 200) {
          return false;
        }
        return true;
      })
    );
  }

  actualizarMetodoPagoService$(metodoPago: MetodoPago): Observable<boolean> {
    const direccion = `${this.base_url}/MetodoPago/Update`;
    return this.httpClient.put<IGeneric<boolean>>(direccion, metodoPago).pipe(
      map((response: IGeneric<boolean>) => {
        if (response.status !== 200) {
          return false;
        }
        return true;
      })
    );
  }

  eliminarMetodoPagoService$(id: number): Observable<boolean> {
    const direccion = `${this.base_url}/MetodoPago/ActivarDesactivar`;
    return this.httpClient
      .delete<IGeneric<boolean>>(direccion, { params: { Id: id.toString() } })
      .pipe(
        map((response: IGeneric<boolean>) => {
          if (response.status !== 200) {
            return false;
          }
          return true;
        })
      );
  }
}
