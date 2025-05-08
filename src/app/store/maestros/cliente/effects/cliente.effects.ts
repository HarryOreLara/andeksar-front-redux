import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ClienteService } from "src/app/services/cliente/cliente.service";
import { actualizarCliente, actualizarClienteSuccess, clienteError, crearCliente, crearClienteSuccess, listarClientes, listarClientesSuccess, obtenerCliente, obtenerClienteSuccess } from "../actions/cliente.actions";
import { Injectable } from "@angular/core";



@Injectable()
export class ClienteEffects {
  constructor(
    private actions$: Actions,
    private clienteService: ClienteService
  ) {}

  listarCliente$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listarClientes),
      mergeMap(() =>
        this.clienteService.listarClienteService$().pipe(
          map((clientes) => {
            return listarClientesSuccess({ clientes });
          }),
          catchError((error) => {
            return of(clienteError({ error }));
          })
        )
      )
    )
  );

  obtenerCliente$ = createEffect(() =>
    this.actions$.pipe(
      ofType(obtenerCliente),
      mergeMap(({ id }) =>
        this.clienteService.obtenerClienteService$(id).pipe(
          map((cliente) => obtenerClienteSuccess({ cliente })),
          catchError((error) => of(clienteError({ error })))
        )
      )
    )
  );

  crearCliente$ = createEffect(() =>
    this.actions$.pipe(
      ofType(crearCliente),
      mergeMap(({ cliente }) =>
        this.clienteService.insertClienteService$(cliente).pipe(
          map((success) => crearClienteSuccess({ cliente })),
          catchError((error) => of(clienteError({ error })))
        )
      )
    )
  );

  actualizarCliente$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actualizarCliente),
      mergeMap(({ cliente }) =>
        this.clienteService.updateClienteService$(cliente).pipe(
          map((success) => actualizarClienteSuccess({ cliente })),
          catchError((error) => of(clienteError({ error })))
        )
      )
    )
  );
}