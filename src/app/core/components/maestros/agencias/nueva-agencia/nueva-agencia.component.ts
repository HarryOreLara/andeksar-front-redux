import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { Agencia } from 'src/app/core/class/agencias/agencias.class';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { createNuevaAgenciaForm } from 'src/app/core/forms/maestros/agencias/agencia.form';

import { AgenciaService } from 'src/app/services/agencia/agencia.service';
import { convertToJsonAgencia } from 'src/app/shared/functions/maestros.functions';

import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-nueva-agencia',
  templateUrl: './nueva-agencia.component.html',
  styleUrls: ['./nueva-agencia.component.css'],
})
export class NuevaAgenciaComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();
  @Input() isNuevaAgencia: boolean = false;
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() agenciaId: number = 0;
  @Output() refreshAgencias: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  departamentoSelected: Estandar = new Estandar({ id: 0, descripcion: '' });

  agenciaForm: FormGroup = createNuevaAgenciaForm(this.fb);

  constructor(
    private readonly agenciaService: AgenciaService,
    private readonly alertService: AlertService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.agenciaForm
      .get('departamento')
      ?.valueChanges.subscribe((departamento: Estandar) => {
        this.departamentoSelected = departamento;
      });
  }

  onShow() {
    if (this.agenciaId == 0) return;
    this.cargarAgencia(this.agenciaId);
  }

  onHide() {
    this.clearComponent();
    this.onHideEmit.emit(false);
  }

  clearComponent() {
    this.agenciaForm.reset();
  }

  cargarAgencia(id: number) {
    this.subscription.add(
      this.agenciaService
        .obtenerAgenciaService$(id)
        .pipe(
          tap((res) => {
            res.horarioInicio = new Date(res.horarioInicio);
            res.horarioTermino = new Date(res.horarioTermino);
          })
        )
        .subscribe({
          next: (data: Agencia) => {
            this.agenciaForm.patchValue({
              nombre: data.nombre,
              direccion: data.direccion,
              departamento: data.departamento,
              provincia: data.provincia,
              horarioInicio: data.horarioInicio,
              horarioTermino: data.horarioTermino,
              activo: data.activo,
              longitud: data.longitud,
              latitud: data.latitud,
              tipoAgencia: data.tipoAgencia,
              agenciaPadre: data.agenciaPadre,
            });
          },
          error: (error) => {
            console.error(error);
            this.alertService.showError('Ups..', 'Error al cargar la agencia');
          },
        })
    );
  }

  crearAgencia() {
    if (this.agenciaForm.invalid) {
      this.alertService.showWarn(
        'Ups..',
        'Por favor complete todos los campos requeridos'
      );
      return;
    }

    const agencia = convertToJsonAgencia(this.agenciaForm, this.agenciaId);
    switch (this.agenciaId) {
      case 0:
        this.guardarAgencia(agencia);
        break;
      default:
        this.actualizarAgencia(agencia);
        break;
    }
  }

  guardarAgencia(agencia: Agencia) {
    this.subscription.add(
      this.agenciaService.insertAgenciaService$(agencia).subscribe({
        next: (response) => {
          this.alertService.showSuccess(
            'Exito',
            'Agencia guardada correctamente'
          );
          this.refreshAgencias.emit(true);
          this.onHide();
        },
        error: (error) => {
          this.alertService.showError('Ups..', 'Error al guardar la agencia');
        },
      })
    );
  }

  actualizarAgencia(agencia: Agencia) {
    this.subscription.add(
      this.agenciaService.updateAgenciaService$(agencia).subscribe({
        next: (response) => {
          this.alertService.showSuccess(
            'Exito',
            'Agencia actualizada correctamente'
          );
          this.refreshAgencias.emit(true);
          this.onHide();
        },
        error: (error) => {
          this.alertService.showError(
            'Ups..',
            'Error al actualizar la agencia'
          );
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
