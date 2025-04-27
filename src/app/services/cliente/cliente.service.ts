import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IGeneric, IGenericArrays } from 'src/app/core/interfaces/interfaces';
import { Cliente } from 'src/app/core/class/maestros/Cliente.class';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  base_url: string = environment.URL_BACKEND;

  private clientesSubject = new BehaviorSubject<Cliente[]>([]);
  private clienteSubject = new BehaviorSubject<Cliente>(new Cliente());
  clientes$ = this.clientesSubject.asObservable();
  cliente$ = this.clienteSubject.asObservable();

  constructor(private readonly httpClient: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.listarClienteService2$().pipe(take(1)).subscribe();
  }

  listarClienteService2$(inactivo: boolean = false): Observable<Cliente[]> {
    const url = `${this.base_url}/Cliente/ListarCliente`;
    return this.httpClient.post<IGenericArrays<Cliente>>(url, inactivo).pipe(
      tap((response) => this.clientesSubject.next(response.data)),
      map((response) =>
        response.data.map((cliente) => Cliente.fromJson(cliente))
      )
    );
  }

  deleteClienteService$(id: number): Observable<boolean> {
    const direccion = `${this.base_url}/Cliente/ActivarDesactivar`;
    return this.httpClient
      .delete<IGeneric<boolean>>(direccion, { params: { id } })
      .pipe(
        tap((response) => {
          if (response.data) {
            const clientesActuales = this.clientesSubject.getValue();
            this.clientesSubject.next(clientesActuales);
          }
        }),
        map((response: IGeneric<boolean>) => response.data)
      );
  }

  obtenerClienteService$(id: number): Observable<Cliente> {
    const direccion = `${this.base_url}/Cliente/ObtenerCliente`;
    return this.httpClient
      .get<IGeneric<Cliente>>(direccion, { params: { id } })
      .pipe(
        map((response: IGeneric<Cliente>) => {
          response.data = Cliente.fromJson(response.data);
          return response.data;
        })
      );
  }

  listarClienteService$(inactivo: boolean = false): Observable<Cliente[]> {
    const direccion = `${this.base_url}/Cliente/ListarCliente`;
    return this.httpClient
      .post<IGenericArrays<Cliente>>(direccion, inactivo)
      .pipe(
        map((response: IGenericArrays<Cliente>) => {
          response.data = response.data.map((cliente) =>
            Cliente.fromJson(cliente)
          );
          return response.data;
        })
      );
  }

  insertClienteService$(cliente: Cliente): Observable<boolean> {
    const direccion = `${this.base_url}/Cliente/Insert`;
    return this.httpClient.post<IGeneric<boolean>>(direccion, cliente).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  updateClienteService$(data: any): Observable<boolean> {
    const direccion = `${this.base_url}/Cliente/Update`;
    return this.httpClient.put<IGeneric<boolean>>(direccion, data).pipe(
      map((response: IGeneric<boolean>) => {
        return response.data;
      })
    );
  }

  buscarClienteByDocService$({
    documento,
    tipoDocumento,
  }: {
    documento: string;
    tipoDocumento: Estandar;
  }): Observable<Cliente> {
    const { id } = tipoDocumento;
    const direccion = `${this.base_url}/Cliente/BuscarClienteByTipoByDocumento`;
    return this.httpClient
      .post<IGeneric<Cliente>>(direccion, { idTipoDocumento: id, documento })
      .pipe(
        map((response: IGeneric<Cliente>) => {
          response.data = Cliente.fromJson(response.data);
          return response.data;
        })
      );
  }
}
