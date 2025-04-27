import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Contactos } from 'src/app/core/class/maestros';
import {
  createContactoForm,
  setContactosToArray,
} from 'src/app/core/forms/maestros/cliente/contactos.form';
import { IContacto } from 'src/app/core/interfaces/maestros/IContacto.interface';
import { ContactoService } from 'src/app/services/contacto/contacto.service';
import { CrudState } from 'src/app/shared/enums';
import { convertToJsonArrayContactos } from 'src/app/shared/functions/maestros.functions';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';


@Component({
  selector: 'app-contactos-cliente',
  templateUrl: './contactos-cliente.component.html',
})
export class ContactosClienteComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  @Input() clienteId: number = 0;
  contactosForm: FormGroup;
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  isNotError: boolean = true;

  @Input() contactState: CrudState = CrudState.PENDING; //Estado siempre sera PENDIENTE
  @Input() isContactSidebarVisible: boolean = false;
  @Output() contactsArrayEmit: EventEmitter<IContacto[]> = new EventEmitter<
    IContacto[]
  >();

  constructor(
    private readonly fb: FormBuilder,
    private readonly validatorsService: ValidatorsService,
    private alertService: AlertService,
    private readonly contactoService: ContactoService,
    private confirmationService: ConfirmationService
  ) {
    this.contactosForm = fb.group({
      contactos: fb.array([this.createContactos()]),
    });
  }

  ngOnInit(): void {}

  onShow() {
    if (this.clienteId == 0) return;

    this.subscription.add(
      this.contactoService
        .listarContactoByIdService(this.clienteId)

        .subscribe({
          next: (res: Contactos[]) => {
            this.setContacts(res);
          },
          error: ({ error }) => {
            let message = error.message
              ? error.message
              : 'Error al cargar los contactos';

            this.alertService.showError('Error', message);
          },
        })
    );
  }

  onHide() {
    this.onHideEmit.emit(false);
  }

  setContacts(contactos: Contactos[]): void {
    const contactoFGs = setContactosToArray(
      contactos,
      this.fb,
      this.validatorsService
    );

    const contactoFormArray = this.fb.array(contactoFGs);
    this.contactosForm.setControl('contactos', contactoFormArray);
  }

  get contactos(): FormArray {
    return this.contactosForm.get('contactos') as FormArray;
  }

  createContactos(): FormGroup {
    return createContactoForm(this.fb, this.validatorsService);
  }

  generateMoreContacts(): void {
    this.contactos.push(this.createContactos());
  }

  guardarContactos() {
    if (this.contactosForm.invalid) {
      this.alertService.showWarn(
        'Alerta!!',
        'Verifique que los datos esten correctos'
      );
      return;
    }

    const contactos = convertToJsonArrayContactos(
      this.contactosForm,
      this.clienteId
    );

    if (contactos.length == 0) {
      this.alertService.showWarn(
        'Alerta!!',
        'Debe agregar al menos un contacto'
      );
      return;
    }

    this.subscription.add(
      this.contactoService
        .updateContactoService$(contactos)
        .subscribe({
          next: (res) => {
            this.alertService.showSuccess('Exito!!', 'Se Agrego correctamente');
            this.onHide();
          },
          error: (error) => {
            this.alertService.showError(
              'Error',
              'Fallo al guardar, contactese con el administrador'
            );
          },
        })
    );
  }

  removeContacts(event: Event, index: number, idContacto: number): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Estas seguro?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (!idContacto) {
          this.contactos.removeAt(index);
          this.alertService.showSuccess(
            'Confirmacion',
            'Contacto eliminado localmente'
          );
          return;
        }

        this.subscription.add(
          this.contactoService.deleteContactoService$(idContacto).subscribe({
            next: (res) => {
              this.alertService.showSuccess(
                'Confirmacion',
                'Eliminaste el contacto correctamente'
              );
              this.onHide();
            },
            error: (error) => {
              this.alertService.showError(
                'Error',
                'Fallo al eliminar en la base de datos, contactese con el administrador'
              );
            },
          })
        );
      },
      reject: () => {
        this.alertService.showInfo('Info', 'Contacto no eliminado');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.clienteId = 0;
  }
}
