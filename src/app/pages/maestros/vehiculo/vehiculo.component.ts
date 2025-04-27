import { Component, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Vehiculo } from 'src/app/core/class/operaciones/programaciones/Vehiculo.class';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  isNewVehiculo: boolean = false;
  vehiculos: Vehiculo[] = [];
  vehiculo: Vehiculo = new Vehiculo();

  constructor(
    private alertService: AlertService,
    private vehiculoService: VehiculoService
  ) {}
  ngOnInit(): void {
    this.listarVehiculos();
  }

  showNuevoVehiculo(event?: boolean) {
    if (event != undefined) {
      this.isNewVehiculo = event;
      this.vehiculo = new Vehiculo();
      return;
    }
    this.isNewVehiculo = !this.isNewVehiculo;
  }

  listarVehiculos() {
    this.subscription.add(
      this.vehiculoService.listarVehiculoService$().subscribe({
        next: (data) => {
          this.vehiculos = data;
        },
        error: (error) => {
          this.alertService.showError('Ups..', 'Error al listar los vehiculos');
        },
      })
    );
  }

  editarVehiculo(vehiculo: Vehiculo) {
    this.vehiculo = vehiculo;
    this.showNuevoVehiculo();
  }

  eliminarVehiculo(vehiculo: Vehiculo) {
    this.subscription.add(
      this.vehiculoService.eliminarVehiculoService$(vehiculo.id).subscribe({
        next: (response) => {
          this.alertService.showSuccess(
            'Vehiculo eliminado',
            'Vehiculo eliminado con éxito'
          );
          this.listarVehiculos();
        },
        error: (error) => {
          this.alertService.showError('Error', 'Error al eliminar el vehiculo');
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
