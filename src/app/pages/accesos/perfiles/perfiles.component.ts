import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Table } from 'primeng/table';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { PerfilService } from 'src/app/core/services/perfil/perfil.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { listarPerfiles } from 'src/app/store/accesos/perfil/actions/perfil.actions';
import { selectPerfiles } from 'src/app/store/accesos/perfil/selector/perfil.selector';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css'],
})
export class PerfilesComponent implements OnInit, OnDestroy {
  private subject$: Subject<void> = new Subject<void>();
  private subscription: Subscription = new Subscription();
  isNuevoPerfil: boolean = false;

  perfiles: Estandar[] = [];
  perfil: Estandar = new Estandar();
  expandedRows = {};

  constructor(
    private store: Store<AppState>,

    private readonly perfilService: PerfilService,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectPerfiles)
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (data) => {
          const { perfiles, loading, error } = data;

          this.perfiles = perfiles;
          if (error) {
            this.alertService.showError('Ups..', error.error);
          }
        },
      });

    this.store.dispatch(listarPerfiles());
  }

  showNuevoPerfil(event?: boolean) {
    if (event != undefined) {
      this.isNuevoPerfil = event;
      this.perfil = new Estandar();
      return;
    }

    this.isNuevoPerfil = !this.isNuevoPerfil;
  }

  editarPerfil(perfil: Estandar) {
    this.perfil = perfil;
    this.showNuevoPerfil();
  }

  eliminarPerfil(perfil: Estandar) {
    this.subscription.add(
      this.perfilService.deletePerfilService$(perfil.id).subscribe({
        next: (response) => {
          this.alertService.showSuccess(
            'Exito',
            'Perfil eliminado correctamente'
          );
        },
      })
    );
  }

  clear(table: Table) {
    table.clear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
