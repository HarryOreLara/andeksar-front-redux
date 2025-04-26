import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenuService } from 'src/app/services/menu/menu.service';
import { listarMenu, listarMenuError, listarMenuSucces } from '../actions/menu.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class MenuEffects {
  constructor(private actions$: Actions, private menuService$: MenuService) {}

  listarMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listarMenu),
      mergeMap(() =>
        this.menuService$.listarMenuOrdenadoService$().pipe(
          map((menu) => {
            return listarMenuSucces({ menu });
          }),
          catchError((error) => {
            return of(listarMenuError({ error }));
          })
        )
      )
    )
  );
}
