import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PerfilService } from '../../services/perfil/perfil.service';
import { convertToJsonEstandar } from 'src/app/shared/functions/estandar.function';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { obtenerPerfil } from 'src/app/store/accesos/perfil/actions/perfil.actions';
import { selectPerfiles } from 'src/app/store/accesos/perfil/selector/perfil.selector';

@Component({
  selector: 'app-nuevo-perfil',
  templateUrl: './nuevo-perfil.component.html',
  styleUrls: ['./nuevo-perfil.component.css'],
})
export class NuevoPerfilComponent implements OnInit, OnDestroy {
  private subject$: Subject<void> = new Subject<void>();

  @Input() isNuevoPerfil: boolean = false;
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() perfilId: number = 0;
  @Output() refreshPerfiles: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  perfilForm: FormGroup = this.fb.group({
    descripcion: ['', [Validators.required]],
  });

  constructor(
    private store: Store<AppState>,

    private readonly fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly perfilService: PerfilService
  ) {}

  ngOnInit(): void {}

  onShow() {
    if (this.perfilId == 0) return;

    this.store
      .select(selectPerfiles)
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (data) => {
          const { perfil, loading, error } = data;
          this.perfilForm.patchValue({
            descripcion: perfil.descripcion,
          });
        },
      });

    this.store.dispatch(obtenerPerfil({ id: this.perfilId }));
  }

  onHide() {
    this.onHideEmit.emit(false);
    this.clearComponent();
  }

  crearPerfil() {
    const perfil = convertToJsonEstandar(this.perfilForm, this.perfilId);
    switch (this.perfilId) {
      case 0:
        this.guardarPerfil(perfil);
        break;
      default:
        this.actualizarPerfil(perfil);
        break;
    }
  }

  guardarPerfil(perfil: Estandar) {
    // this.subscription.add(
    //   this.perfilService.insertPerfilService$(perfil).subscribe({
    //     next: (data) => {
    //       this.alertService.showSuccess('Exito', 'Perfil creado correctamente');
    //       this.onHide();
    //       this.refreshPerfiles.emit(true);
    //     },
    //   })
    // );
  }

  actualizarPerfil(perfil: Estandar) {
    // this.subscription.add(
    //   this.perfilService.updatePerfilService$(perfil).subscribe({
    //     next: (data) => {
    //       this.alertService.showSuccess(
    //         'Exito',
    //         'Perfil actualizado correctamente'
    //       );
    //       this.onHide();
    //       this.refreshPerfiles.emit(true);
    //     },
    //   })
    // );
  }

  clearComponent() {
    this.perfilForm.reset();
    this.perfilId = 0;
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
