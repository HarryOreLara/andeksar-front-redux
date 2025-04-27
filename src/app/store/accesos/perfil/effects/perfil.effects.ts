import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PerfilService } from 'src/app/core/services/perfil/perfil.service';
import {
  actualizarPerfil,
  actualizarPerfilSuccess,
  crearPerfil,
  crearPerfilSuccess,
  listarPerfiles,
  listarPerfilesSuccess,
  obtenerPerfil,
  obtenerPerfilSuccess,
  perfilError,
} from '../actions/perfil.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PerfilesEffects {
  constructor(
    private actions$: Actions,
    private perfilService: PerfilService
  ) {}

  listarPerfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listarPerfiles),
      mergeMap(() =>
        this.perfilService.listarPerfilService$().pipe(
          map((perfiles) => {
            return listarPerfilesSuccess({ perfiles });
          }),
          catchError((error) => {
            return of(perfilError({ error }));
          })
        )
      )
    )
  );

  obtenerPerfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(obtenerPerfil),
      mergeMap(({ id }) =>
        this.perfilService.obtenerPerfilService$(id).pipe(
          map((perfil) => obtenerPerfilSuccess({ perfil })),
          catchError((error) => of(perfilError({ error })))
        )
      )
    )
  );

  crearPerfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(crearPerfil),
      mergeMap(({ perfil }) =>
        this.perfilService.insertPerfilService$(perfil).pipe(
          map((success) => crearPerfilSuccess({ perfil })),
          catchError((error) => of(perfilError({ error })))
        )
      )
    )
  );

  actualizarPerfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actualizarPerfil),
      mergeMap(({ perfil }) =>
        this.perfilService.updatePerfilService$(perfil).pipe(
          map((success) => actualizarPerfilSuccess({ perfil })),
          catchError((error) => of(perfilError({ error })))
        )
      )
    )
  );
}
