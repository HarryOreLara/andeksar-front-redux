import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Table } from 'primeng/table';
import { Subject, takeUntil } from 'rxjs';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AppState } from 'src/app/store/app.reducers';
import { listarVehiculos } from 'src/app/store/maestros/vehiculo/actions/vehiculo.actions';
import { selectVehiculos } from 'src/app/store/maestros/vehiculo/selector/vehiculo.selector';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoComponent implements OnInit, OnDestroy {
  private subject$: Subject<void> = new Subject<void>();

  isNewVehiculo: boolean = false;
  vehiculos: Vehiculo[] = [];
  vehiculo: Vehiculo = new Vehiculo();

  constructor(
    private alertService: AlertService,
    private vehiculoService: VehiculoService,
    protected store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectVehiculos)
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (data) => {
          const { vehiculos, loading, error } = data;
          this.vehiculos = vehiculos;
          if (error) {
            this.alertService.showError('Ups..', error.error);
          }
        },
      });

      this.store.dispatch(listarVehiculos());
  }

  showNuevoVehiculo(event?: boolean) {
    if (event != undefined) {
      this.isNewVehiculo = event;
      this.vehiculo = new Vehiculo();
      return;
    }
    this.isNewVehiculo = !this.isNewVehiculo;
  }

  editarVehiculo(vehiculo: Vehiculo) {
    this.vehiculo = vehiculo;
    this.showNuevoVehiculo();
  }

  eliminarVehiculo(vehiculo: Vehiculo) {
    this.vehiculoService.eliminarVehiculoService$(vehiculo.id).subscribe({
      next: (response) => {
        this.alertService.showSuccess(
          'Vehiculo eliminado',
          'Vehiculo eliminado con éxito'
        );
      },
      error: (error) => {
        this.alertService.showError('Error', 'Error al eliminar el vehiculo');
      },
    });
  }

  clear(table: Table) {
    table.clear();
  }
  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
