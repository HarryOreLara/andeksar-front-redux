import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Table } from 'primeng/table';
import { ContactoService } from 'src/app/services/contacto/contacto.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { finalize, Subscription } from 'rxjs';
import { OrderResetService } from 'src/app/shared/helpers/orden/order-reset.service';
import { Cliente } from 'src/app/core/class/maestros/Cliente.class';
import { Contactos } from 'src/app/core/class/maestros';
import { FormControl, FormGroup } from '@angular/forms';

type ClienteFormType = {
  [K in keyof Cliente]: FormControl<Cliente[K]>;
};

@Component({
  selector: 'app-persona-contacto',
  templateUrl: './persona-contacto.component.html',
})
export class PersonaContactoComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private resetSubscription: Subscription = new Subscription();

  @Input() isPersonContact: boolean = false;
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() arrayContactsEmit: EventEmitter<Contactos[]> = new EventEmitter<
    Contactos[]
  >();
  @Input() destinatarioForm: FormGroup<ClienteFormType> ;

  idContacts: number[] = [];
  contacts: Contactos[] = [];
  constactsSelected: Contactos[] = [];
  loading: boolean = true;

  constructor(
    private readonly contactService: ContactoService,
    private alertService: AlertService,
    private orderResetService: OrderResetService
  ) {}

  ngOnInit(): void {
    this.resetSubscription = this.orderResetService.resetForms$.subscribe(
      () => {
        this.clearComponent();
      }
    );

    this.subscription.add(
      this.destinatarioForm?.valueChanges.subscribe(({ id = 0 }) => {
        this.loadContacts(id || 0);
      })
    );
  }

  private loadContacts(id: number): void {
    this.loading = true;

    this.subscription.add(
      this.contactService
        .listarContactoByIdService(id)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe({
          next: (res: Contactos[]) => {
            this.contacts = res;
          },
          error: (err) => {
            let message = err.error.message
              ? err.error.message
              : 'Error al Cargar los tipos de documentos';

            this.alertService.showError('Error', message);
          },
        })
    );
  }

  clear(table: Table) {
    table.clear();
  }

  onHide() {
    this.onHideEmit.emit(false);
  }

  onShow() {
    if (this.contacts.length === 0) {
      this.loadContacts(0);
    }
  }

  selectClient(index: number, contacto: Contactos) {
    this.contacts[index].activo = !this.contacts[index].activo;
    const currentId = this.constactsSelected.includes(contacto);
    if (currentId) {
      this.constactsSelected = this.constactsSelected.filter(
        (contact) => contact.idContacto !== contacto.idContacto
      );
    } else {
      this.constactsSelected = [...this.constactsSelected, contacto];
    }

    this.arrayContactsEmit.emit(this.constactsSelected);
  }

  clearComponent() {
    this.idContacts = [];
    this.contacts = [];
    this.constactsSelected = [];
    this.loadContacts(0);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.resetSubscription.unsubscribe();
  }
}
