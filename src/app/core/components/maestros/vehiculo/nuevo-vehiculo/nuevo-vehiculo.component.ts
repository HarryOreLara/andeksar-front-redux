import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import { createNuevoVehiculoForm } from 'src/app/core/forms/maestros/vehiculo/vehiculo.form';
import { convertToJsonVehiculo } from 'src/app/shared/functions/maestros.functions';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AppState } from 'src/app/store/app.reducers';
import {
  actualizarVehiculo,
  crearVehiculo,
  obtenerVehiculo,
} from 'src/app/store/maestros/vehiculo/actions/vehiculo.actions';
import { selectVehiculos } from 'src/app/store/maestros/vehiculo/selector/vehiculo.selector';

@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.component.html',
  styleUrls: ['./nuevo-vehiculo.component.css'],
})
export class NuevoVehiculoComponent implements OnInit, OnDestroy {
  private subject$: Subject<void> = new Subject<void>();

  @Input() isNewVehiculo: boolean = false;
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() vehiculoId: number = 0;
  @Output() refreshVehiculo: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  externoOptions: any[] = [
    { label: 'Vehiculo Externo', value: true },
    { label: 'Vehiculo Interno', value: false },
  ];

  nuevoVehiculoForm = createNuevoVehiculoForm(this.fb);

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  onShow() {
    if (this.vehiculoId == 0) return;

    this.store
      .select(selectVehiculos)
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (data) => {
          const { vehiculo, loading, error } = data;
          this.nuevoVehiculoForm.patchValue(vehiculo);
        },
      });

    this.store.dispatch(obtenerVehiculo({ id: this.vehiculoId }));
  }

  onHide() {
    if (this.vehiculoId !== 0) {
      this.clearComponent();
    }

    this.onHideEmit.emit(false);
  }

  clearComponent() {
    this.nuevoVehiculoForm.reset();
    this.vehiculoId = 0;
  }

  crearVehiculo() {
    if (this.nuevoVehiculoForm.invalid) {
      this.alertService.showInfo(
        'Ups...',
        'Por favor, complete los campos requeridos'
      );
      return;
    }

    const vehiculo = convertToJsonVehiculo(
      this.nuevoVehiculoForm,
      this.vehiculoId
    );

    switch (this.vehiculoId) {
      case 0:
        this.guardarVehiculo(vehiculo);
        break;
      default:
        this.actualizarVehiculo(vehiculo);
        break;
    }
  }

  guardarVehiculo(vehiculo: Vehiculo) {
    this.store.dispatch(crearVehiculo({ vehiculo }));
    this.alertService.showSuccess(
      'Vehiculo creado',
      'Vehiculo creado con éxito'
    );
    this.onHide();
  }

  actualizarVehiculo(vehiculo: Vehiculo) {
    this.store.dispatch(actualizarVehiculo({ vehiculo }));
    this.alertService.showSuccess(
      'Vehiculo actualizado',
      'Vehiculo actualizado con éxito'
    );
    this.onHide();
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
