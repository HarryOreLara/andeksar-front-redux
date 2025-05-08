import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { Cliente } from 'src/app/core/class/maestros';
import { Table } from 'primeng/table';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { selectClientes } from 'src/app/store/maestros/cliente/selector/cliente.selector';
import { listarClientes } from 'src/app/store/maestros/cliente/actions/cliente.actions';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();
  private subject$: Subject<void> = new Subject<void>();

  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  isNewCliente: boolean = false;
  isContactSidebarVisible: boolean = false;
  isDirectionSidebarVisible: boolean = false;

  constructor(
    private readonly alertService: AlertService,
    private readonly clienteService: ClienteService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectClientes)
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (data) => {
          const { clientes, loading, error } = data;
          this.clientes = clientes;
          if (error) {
            this.alertService.showError('Ups..', error.error);
          }
        },
      });

    this.store.dispatch(listarClientes());
  }

  clear(table: Table) {
    table.clear();
  }

  showNewClient(event?: boolean) {
    if (event != undefined) {
      this.isNewCliente = event;
      this.cliente = new Cliente();
      return;
    }
    this.isNewCliente = !this.isNewCliente;
  }

  editarCliente(cliente: Cliente) {
    this.cliente = cliente;
    this.showNewClient();
  }

  eliminarCliente(cliente: Cliente) {
    this.subscription.add(
      this.clienteService.deleteClienteService$(cliente.id).subscribe({
        next: (res) => {
          this.alertService.showSuccess('Exito', 'Accion Realizada');
          this.clienteService
            .listarClienteService2$()
            .pipe(take(1))
            .subscribe();
        },
      })
    );
  }

  contactoSidebarEmited() {
    this.isContactSidebarVisible = !this.isContactSidebarVisible;
  }

  directionSidebarEmited() {
    this.isDirectionSidebarVisible = !this.isDirectionSidebarVisible;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subject$.next();
    this.subject$.complete();
  }
}
