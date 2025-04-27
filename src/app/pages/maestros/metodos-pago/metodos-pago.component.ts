import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MetodoPago } from 'src/app/core/class/pagos/MetodoPago.class';
import { MetodoPagoService } from 'src/app/services/metodo-pago/metodo-pago.service';
import { ActivosState } from 'src/app/shared/enums';
import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: 'app-formas-pago',
  templateUrl: './metodos-pago.component.html',
  styleUrls: ['./metodos-pago.component.css'],
})
export class MetodosPagoComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();
  payment: ActivosState = ActivosState.ACTIVO;
  // metodosPago: MetodoPago[] = C_METODOS_PAGO;
  metodosPago: MetodoPago[] = [];
  metodoPago: MetodoPago = new MetodoPago();
  isNuevoMetodoPago: boolean = false;
  ActivosState = ActivosState;

  constructor(
    private readonly alertService: AlertService,
    private readonly metodosPagoService: MetodoPagoService
  ) {}

  ngOnInit(): void {
    this.cargarMetodosPago();
  }

  cargarMetodosPago() {
    this.subscription.add(
      this.metodosPagoService.listarMetodosPagoService$().subscribe({
        next: (metodosPago: MetodoPago[]) => {
          this.metodosPago = metodosPago;
        },
        error: (error: any) => {
          this.alertService.showError(
            'Ups..',
            'Error al cargar los métodos de pago'
          );
        },
      })
    );
  }

  onEstadoChange(metodoPago: MetodoPago, isActive: boolean): void {
    metodoPago.estado = isActive ? ActivosState.ACTIVO : ActivosState.INACTIVO;

    this.metodosPagoService
      .eliminarMetodoPagoService$(metodoPago.id)
      .subscribe({
        next: () => {
          this.alertService.showSuccess(
            'Método de pago actualizado',
            'Estado actualizado correctamente'
          );
        },
        error: (error: any) => {
          this.alertService.showError(
            'Ups..',
            'Error al actualizar el estado del método de pago'
          );
        },
      });
  }

  editarMetodoPago(metodoPago: MetodoPago) {
    this.metodoPago = metodoPago;
    this.showNuevoMetodoPago();
  }

  showNuevoMetodoPago(event?: boolean) {
    if (event != undefined) {
      this.isNuevoMetodoPago = event;
      this.metodoPago = new MetodoPago();
      return;
    }

    this.isNuevoMetodoPago = !this.isNuevoMetodoPago;
  }

  ngOnDestroy(): void {}
}
