import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import { createNuevoVehiculoForm } from 'src/app/core/forms/maestros/vehiculo/vehiculo.form';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';
import { convertToJsonVehiculo } from 'src/app/shared/functions/maestros.functions';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.component.html',
  styleUrls: ['./nuevo-vehiculo.component.css'],
})
export class NuevoVehiculoComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
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
    private vehiculoService: VehiculoService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onShow() {
    if (this.vehiculoId == 0) return;

    this.subscription.add(
      this.vehiculoService
        .obtenerVehiculoByIdService$(this.vehiculoId)
        .subscribe({
          next: (response) => {
            this.nuevoVehiculoForm.patchValue(response);
          },
          error: (error) => {
            this.alertService.showError(
              'Error',
              'Error al obtener el vehiculo'
            );
          },
        })
    );
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
        this.actualizarVehipculo(vehiculo);
        break;
    }
  }

  guardarVehiculo(vehiculo: Vehiculo) {
    this.vehiculoService.crearVehiculoService$(vehiculo).subscribe({
      next: (response) => {
        this.refreshVehiculo.emit(true);
        this.alertService.showSuccess(
          'Vehiculo creado',
          'Vehiculo creado con éxito'
        );
        this.onHide();
      },
      error: (error) => {
        this.alertService.showError('Error', 'Error al crear el vehiculo');
      },
    });
  }

  actualizarVehipculo(vehiculo: Vehiculo) {
    this.vehiculoService.actualizarVehiculoService$(vehiculo).subscribe({
      next: (response) => {
        this.alertService.showSuccess(
          'Vehiculo actualizado',
          'Vehiculo actualizado con éxito'
        );
        this.refreshVehiculo.emit(true);
        this.onHide();
      },
      error: (error) => {
        this.alertService.showError('Error', 'Error al actualizar el vehiculo');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
