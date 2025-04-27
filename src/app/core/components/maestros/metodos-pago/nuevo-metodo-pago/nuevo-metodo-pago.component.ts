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
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { MetodoPago } from 'src/app/core/class/pagos/MetodoPago.class';
import { createNuevoMetodoPagoForm } from 'src/app/core/forms/maestros/metodo-pago/metodo-pago.form';
import { MetodoPagoService } from 'src/app/services/metodo-pago/metodo-pago.service';
import { ActivosState } from 'src/app/shared/enums';
import { convertToJsonMetodoPago } from 'src/app/shared/functions/maestros.functions';
import { AlertService } from 'src/app/shared/services/alert.service';



@Component({
  selector: 'app-nuevo-metodo-pago',
  templateUrl: './nuevo-metodo-pago.component.html',
  styleUrls: ['./nuevo-metodo-pago.component.css'],
})
export class NuevoMetodoPagoComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();
  icono: string = 'pi pi-credit-card';
  @Input() isNuevoMetodoPago: boolean = false;
  @Input() metodoPagoId: number = 0;
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() refreshMetodoPago: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  stateOptions: Estandar[] = [
    new Estandar({
      id: ActivosState.ACTIVO,
      descripcion: 'Activo',
    }),
    new Estandar({
      id: ActivosState.INACTIVO,
      descripcion: 'Inactivo',
    }),
  ];

  metodoPagoForm = createNuevoMetodoPagoForm(this.fb);

  constructor(
    private readonly fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly metodoPagoService: MetodoPagoService
  ) {}

  ngOnInit(): void {}

  onShow() {
    if (this.metodoPagoId == 0) return;

    this.subscription.add(
      this.metodoPagoService
        .obtenerMetodoPagoByIdService$(this.metodoPagoId)
        .subscribe({
          next: (metodoPago: MetodoPago) => {
            this.metodoPagoForm.patchValue({
              nombre: metodoPago.nombre,
              descripcion: metodoPago.descripcion,
              cuentaBanco: metodoPago.cuentaBanco,
            });

            this.icono = metodoPago.icono;
          },
          error: (err) => {
            let message = err.error.message
              ? err.error.message
              : 'Error al registrar el cliente';
            this.alertService.showError('Error', message);
          },
        })
    );
  }

  onHide() {
    if (this.metodoPagoId !== 0) {
      this.clearComponent();
    }

    this.onHideEmit.emit(false);
  }

  clearComponent() {
    this.metodoPagoForm.reset();
    this.metodoPagoId = 0;
  }

  crearMetodoPago() {
    if (this.metodoPagoForm.invalid) {
      this.alertService.showError('Error', 'Formulario invalido');
      return;
    }

    const metodoPago = convertToJsonMetodoPago(
      this.metodoPagoForm,
      this.metodoPagoId,
      this.icono
    );
    switch (this.metodoPagoId) {
      case 0:
        this.guardarMetodoPago(metodoPago);
        break;
      default:
        this.actualizarMetodoPago(metodoPago);
        break;
    }
  }

  guardarMetodoPago(metodoPago: MetodoPago) {
    this.subscription.add(
      this.metodoPagoService.insertarMetodoPagoService$(metodoPago).subscribe({
        next: (resp) => {
          this.alertService.showSuccess(
            'Exito!!',
            'Metodo de pago creado correctamente'
          );
          this.refreshMetodoPago.emit(true);
          this.onHide();
        },
        error: (err) => {
          let message = err.error.message
            ? err.error.message
            : 'Error al registrar el metodo de pago';
          this.alertService.showError('Error', message);
        },
      })
    );
  }
  actualizarMetodoPago(metodoPago: MetodoPago) {
    this.subscription.add(
      this.metodoPagoService
        .actualizarMetodoPagoService$(metodoPago)
        .subscribe({
          next: (resp) => {
            this.alertService.showSuccess(
              'Exito!!',
              'Metodo de pago actualizado correctamente'
            );
            this.refreshMetodoPago.emit(true);
            this.onHide();
          },
          error: (err) => {
            let message = err.error.message
              ? err.error.message
              : 'Error al registrar el cliente';
            this.alertService.showError('Error', message);
          },
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
