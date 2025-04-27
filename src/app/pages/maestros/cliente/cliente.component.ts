import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { Cliente } from 'src/app/core/class/maestros';
import { Table } from 'primeng/table';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();
  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  isNewCliente: boolean = false;
  isContactSidebarVisible: boolean = false;
  isDirectionSidebarVisible: boolean = false;

  clientes$: Observable<Cliente[]> = this.clienteService.clientes$;

  constructor(
    private readonly alertService: AlertService,
    private readonly clienteService: ClienteService
  ) {}

  ngOnInit(): void {}

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

  ngOnDestroy(): void {}
}
