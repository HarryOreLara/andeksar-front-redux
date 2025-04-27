import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Direcciones } from 'src/app/core/class/maestros';
import { Cliente } from 'src/app/core/class/maestros/Cliente.class';
import { createClienteForm } from 'src/app/core/forms/maestros/cliente/cliente.form';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { CrudState, TablaSunat } from 'src/app/shared/enums';
import { TIPO_DOCUMENTO } from 'src/app/shared/enums/tipo-documento.enum';
import { convertToJsonCliente } from 'src/app/shared/functions/maestros.functions';
import { updateValidatorsTipoDocumentoTrabajador } from 'src/app/shared/functions/validators.functions';
import { EventResetService } from 'src/app/shared/helpers/orden/event-reset.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente-component.css'],
})
export class NuevoClienteComponent implements OnInit {
  /**
   * Supscripciones activas para cada evento
   */
  private subscription: Subscription = new Subscription();

  departamentoSelected: Estandar = new Estandar({ id: 0, descripcion: '' });
  provinciaSelected: Estandar = new Estandar({ id: 0, descripcion: '' });

  isRucSelected = false;
  isContactSidebarVisible: boolean = false;
  isDirectionSidebarVisible: boolean = false;

  tablaSunat: TablaSunat = TablaSunat.TIPO_DOCUMENTO;
  cliente: Cliente = new Cliente();

  @Output() messageEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() contactoSidebarEmit: EventEmitter<void> = new EventEmitter<void>();
  @Output() directionSidebarEmit: EventEmitter<void> = new EventEmitter<void>();
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() contactStateEmit: EventEmitter<CrudState> =
    new EventEmitter<CrudState>();
  @Input() hasNewClient: boolean = false;
  @Input() direcciones: any[] = [];
  @Input() contactos: any[] = [];

  clienteForm: FormGroup = createClienteForm(
    this.fb,
    this.customValidatorsService
  );

  @Input() clienteId: number = 0;
  @Output() refresCliente: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private readonly clienteService: ClienteService,
    private readonly customValidatorsService: ValidatorsService,
    private alertService: AlertService,
    private readonly eventResetService: EventResetService
  ) {}

  ngOnInit(): void {
    this.clienteForm
      .get('tipoDocumento')
      ?.valueChanges.subscribe((tipoDocumento) => {
        if (tipoDocumento == null) return;

        this.isRucSelected =
          tipoDocumento.id === TIPO_DOCUMENTO.RUC ? true : false;
        updateValidatorsTipoDocumentoTrabajador(
          tipoDocumento,
          this.clienteForm
        );
      });

    this.clienteForm
      .get('departamento')
      ?.valueChanges.subscribe((departamento: Estandar) => {
        this.departamentoSelected = departamento;
      });

    this.clienteForm
      .get('provincia')
      ?.valueChanges.subscribe((provincia: Estandar) => {
        this.provinciaSelected = provincia;
      });

    this.clienteForm
      .get('distrito')
      ?.valueChanges.subscribe((distrito: Estandar) => {
        this.onDistritoSelect({ value: distrito });
      });
  }

  searchClient(): void {
    const controlDoc = this.clienteForm.get('documento')?.invalid;

    if (controlDoc) {
      this.alertService.showWarn(
        'Alerta!!',
        'Verifique que los datos esten correctos'
      );
      return;
    }

    this.clienteService
      .buscarClienteByDocService$(this.clienteForm.value)

      .subscribe({
        next: (res: Cliente) => {
          this.cliente = res;
          this.clienteId = res.id;
          this.clienteForm.patchValue(res);
          this.habilitarCampos();
        },
        error: (error) => {
          let message = error.error.message
            ? error.error.message
            : 'Error al buscar el cliente';
          this.alertService.showError('Error', message);
        },
      });
  }

  onShow() {
    if (this.clienteId == 0) return;
    this.subscription.add(
      this.clienteService.obtenerClienteService$(this.clienteId).subscribe({
        next: (res: Cliente) => {
          this.cliente = res;
          this.clienteId = res.id;
          this.clienteForm.patchValue(res);
          this.habilitarCampos();
        },
      })
    );
  }

  onHide() {
    if (this.clienteId !== 0) {
      this.clearComponent();
    }

    this.onHideEmit.emit(false);
  }

  clearComponent() {
    this.clienteForm.reset();
    this.clienteId = 0;
    this.isRucSelected = false;
    this.provinciaSelected = new Estandar();
    this.departamentoSelected = new Estandar();
    this.eventResetService.triggerReset();
  }

  crearCliente() {
    const cliente = convertToJsonCliente(this.clienteForm, this.clienteId);

    switch (this.clienteId) {
      case 0:
        this.actualizarCliente(cliente);
        break;
      default:
        this.actualizarCliente(cliente);
        break;
    }
  }

  guardarCliente(cliente: Cliente) {
    this.subscription.add(
      this.clienteService.insertClienteService$(cliente).subscribe({
        next: (res) => {
          this.clienteForm.reset();
          this.onHide();
          this.alertService.showSuccess('Exito', 'Cliente registrado');
        },
        error: (error) => {
          let message = error.error.message
            ? error.error.message
            : 'Error al registrar el cliente';
          this.alertService.showError('Error', message);
        },
      })
    );
  }

  actualizarCliente(cliente: Cliente) {
    this.subscription.add(
      this.clienteService.updateClienteService$(cliente).subscribe({
        next: (res) => {
          this.clienteForm.reset();
          this.onHide();
          this.refresCliente.emit(true);
          this.alertService.showSuccess('Exito', 'Cliente actualizado');
        },
        error: (error) => {
          let message = error.error.message
            ? error.error.message
            : 'Error al actualizar el cliente';
          this.alertService.showError('Error', message);
        },
      })
    );
  }

  onDistritoSelect({ value }: { value: Estandar }) {
    if (!value || !value.id) return; // Validación para evitar errores

    let idStr = value.id.toString(); // Convertimos el número a cadena
    if (idStr.length === 5) {
      idStr = `0${idStr}`; // Preparamos el valor formateado como cadena
    }

    this.clienteForm.patchValue({
      ubigeo: idStr,
    });
  }

  direccionesArrayEmited(direcciones: Direcciones[]) {
    this.direcciones = direcciones;
  }

  showContacSidebar(event?: boolean) {
    if (event != undefined) {
      this.isContactSidebarVisible = event;
      return;
    }

    this.isContactSidebarVisible = !this.isContactSidebarVisible;
  }

  showDirectionSidebar(event?: boolean) {
    if (event != undefined) {
      this.isDirectionSidebarVisible = event;
      return;
    }

    this.isDirectionSidebarVisible = !this.isDirectionSidebarVisible;
  }

  habilitarCampos(): void {
    this.clienteForm.get('direccion')?.enable();
    this.clienteForm.get('telefono')?.enable();
    this.clienteForm.get('credito')?.enable();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
