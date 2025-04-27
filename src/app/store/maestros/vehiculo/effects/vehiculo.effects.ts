import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';
import {
  actualizarVehiculo,
  actualizarVehiculoSuccess,
  crearVehiculo,
  crearVehiculoSuccess,
  listarVehiculos,
  listarVehiculosSuccess,
  obtenerVehiculo,
  obtenerVehiculoSuccess,
  vehiculoerror,
} from '../actions/vehiculo.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class VehiculoEffects {
  constructor(
    private actions$: Actions,
    private vehiculoService: VehiculoService
  ) {}

  listarVehiculo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listarVehiculos),
      mergeMap(() =>
        this.vehiculoService.listarVehiculoService$().pipe(
          map((vehiculos) => {
            return listarVehiculosSuccess({ vehiculos });
          }),
          catchError((error) => {
            return of(vehiculoerror({ error }));
          })
        )
      )
    )
  );

  obtenerVehiculo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(obtenerVehiculo),
      mergeMap(({ id }) =>
        this.vehiculoService.obtenerVehiculoByIdService$(id).pipe(
          map((vehiculo) => obtenerVehiculoSuccess({ vehiculo })),
          catchError((error) => of(vehiculoerror({ error })))
        )
      )
    )
  );

  crearVehiculo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(crearVehiculo),
      mergeMap(({ vehiculo }) =>
        this.vehiculoService.crearVehiculoService$(vehiculo).pipe(
          map((success) => crearVehiculoSuccess({ vehiculo })),
          catchError((error) => of(vehiculoerror({ error })))
        )
      )
    )
  );

  actualizarVehiculo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actualizarVehiculo),
      mergeMap(({ vehiculo }) =>
        this.vehiculoService.actualizarVehiculoService$(vehiculo).pipe(
          map((success) => {
            return actualizarVehiculoSuccess({ vehiculo });
          }),
          catchError((error) => of(vehiculoerror({ error })))
        )
      )
    )
  );
}
