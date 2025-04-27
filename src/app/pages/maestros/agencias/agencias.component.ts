import { Component, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Agencia } from 'src/app/core/class/agencias/agencias.class';
import { AgenciaService } from 'src/app/services/agencia/agencia.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css'],
})
export class AgenciasComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  isNuevaAgencia: boolean = false;
  agencias: Agencia[] = [];
  agencia: Agencia = new Agencia();

  constructor(
    private agenciaService: AgenciaService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.cargarAgencias();
  }

  showNuevaAgencia(event?: boolean) {
    if (event != undefined) {
      this.isNuevaAgencia = event;
      this.agencia = new Agencia();
      return;
    }

    this.isNuevaAgencia = !this.isNuevaAgencia;
  }

  cargarAgencias() {
    this.subscription.add(
      this.agenciaService.listarAgenciaService$().subscribe({
        next: (agencias) => {
          this.agencias = agencias;
        },
        error: (error) => {
          this.alertService.showError('Ups..', 'Error al cargar las agencias');
        },
      })
    );
  }

  editarAgencia(agencia: Agencia) {
    this.agencia = agencia;
    this.showNuevaAgencia();
  }

  eliminarAgencia(agencia: Agencia) {
    this.subscription.add(
      this.agenciaService.deleteAgenciaService$(agencia.id).subscribe({
        next: (data) => {
          this.alertService.showSuccess(
            'Correcto',
            'Accion realizada correctamente'
          );
          this.cargarAgencias();
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
