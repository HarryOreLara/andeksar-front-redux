import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AgenciaService } from 'src/app/services/agencia/agencia.service';
import {
  listarAgenciaByDocumentoTrabajador,
  listarAgenciaByDocumentoTrabajadorSuccess,
} from '../actions/dropdown.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class DropdownEffects {
  constructor(
    private actions$: Actions,
    private agenciaService: AgenciaService
  ) {}

  listarAgenciaByDocumentoTrabajador$ = createEffect(() =>
      this.actions$.pipe(
        ofType(listarAgenciaByDocumentoTrabajador),
        mergeMap((action) =>
          this.agenciaService
            .listarAgenciaByDocTrabajadorService$(action.documento)
            .pipe(
              map((agencias) => {
                return listarAgenciaByDocumentoTrabajadorSuccess({ items: agencias });
              })
            )
        )
      )
  );
}
