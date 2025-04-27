import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { Direcciones } from 'src/app/core/class/maestros';
import { createDireccionForm } from 'src/app/core/forms/maestros/cliente/direccion.form';
import { DireccionService } from 'src/app/services/direccion/direccion.service';
import { UbigeoService } from 'src/app/services/ubigeo/ubigeo.service';

import { convertToDireccion } from 'src/app/shared/functions/maestros.functions';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-direcciones-cliente',
  templateUrl: './direcciones-cliente.component.html',
  styleUrls: ['./direcciones-cliente.component.css'],
})
export class DireccionesClienteComponent implements OnInit, OnDestroy {
  direccionForm: FormGroup = createDireccionForm(this.fb);
  departamento: Estandar[] = [];
  departamentoSelected: Estandar = new Estandar({ id: 0, descripcion: '' });
  @Input() isDirectionSidebarVisible: boolean = false;
  @Input() clienteId: number = 0;
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  private subscription: Subscription = new Subscription();
  direcciones: Direcciones[] = [];
  clonedDirecciones: { [s: string]: Direcciones } = {};

  constructor(
    private readonly fb: FormBuilder,
    private alertService: AlertService,
    private ubigeoService: UbigeoService,
    private readonly direccionService: DireccionService
  ) {}

  ngOnInit(): void {
    this.direccionForm.get('departamento')?.valueChanges.subscribe((value) => {
      this.departamentoSelected = value;
    });
  }

  cargarDireccion() {
    if (this.direccionForm.invalid) {
      this.alertService.showError('Error', 'Complete los campos requeridos');
      return;
    }

    const direccion = convertToDireccion(this.direccionForm, this.clienteId);
    this.direcciones = [...this.direcciones, direccion];
    this.direccionForm.reset();
  }

  onShow() {
    this.loadDepartament();
    if (this.clienteId == 0) return;

    this.subscription.add(
      this.direccionService
        .listarDireccionByIdClienteService$(this.clienteId)
        .subscribe({
          next: (direcciones) => {
            this.direcciones = direcciones;
          },
          error: (error) => {
            this.alertService.showError(
              'Error',
              'Error al cargar las direcciones'
            );
          },
        })
    );
  }

  onHide() {
    this.onHideEmit.emit(false);
  }

  private loadDepartament() {
    this.subscription.add(
      this.ubigeoService.listarUbigeoByIdPadre().subscribe({
        next: (res) => {
          this.departamento = res;
        },
        error: (error) => {
          this.alertService.showError(
            'Error',
            'Error al cargar los departamentos'
          );
        },
      })
    );
  }

  crearDireccion() {
    if (this.direcciones.length == 0) {
      this.alertService.showError('Error', 'No hay direcciones para guardar');
      return;
    }

    const direcciones = Direcciones.toJsonArray(this.direcciones);
    switch (this.clienteId) {
      case 0:
        this.guardarDirecciones(direcciones);
        break;
      default:
        this.actualizarDireccion(direcciones);
        break;
    }
  }

  guardarDirecciones(direcciones: Direcciones[]) {
    this.subscription.add(
      this.direccionService.insertDireccionService$(direcciones).subscribe({
        next: (data) => {
          this.alertService.showSuccess(
            'Exito',
            'Direcciones guardadas correctamente'
          );
          this.onHide();
        },
        error: (error) => {
          let message = error.error.message
            ? error.error.message
            : 'Error al guardar las direcciones';

          this.alertService.showError('Error', message);
        },
      })
    );
  }

  actualizarDireccion(direccion: Direcciones[]) {
    this.subscription.add(
      this.direccionService.updateDireccionService$(direccion).subscribe({
        next: (data) => {
          this.alertService.showSuccess(
            'Exito',
            'Dirección actualizada correctamente'
          );
        },
        error: (error) => {
          let message = error.error.message
            ? error.error.message
            : 'Error al actualizar las direcciones';

          this.alertService.showError('Error', message);
        },
      })
    );
  }

  removeDirecciones(event: Event, index: number, idDireccion: number): void {
    if (!idDireccion) {
      this.direcciones.splice(index, 1);
      this.alertService.showSuccess(
        'Confirmacion',
        'Acción realizada correctamente'
      );
      return;
    }

    this.subscription.add(
      this.direccionService.deleteDireccionService$(idDireccion).subscribe({
        next: (res) => {
          this.alertService.showSuccess(
            'Confirmacion',
            'Acción realizada correctamente'
          );
        },
        error: (error) => {
          this.alertService.showError(
            'Error',
            'Fallo al realizar la acción solicitada'
          );
        },
      })
    );
  }

  removeDireccionPrincipal(event: boolean, index: number, idDireccion: number): void {
    this.direcciones.forEach((direccion, i) => {
      direccion.isPrincipal = (i === index); // solo la dirección del índice actual queda como principal
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.clienteId = 0;
  }
}
