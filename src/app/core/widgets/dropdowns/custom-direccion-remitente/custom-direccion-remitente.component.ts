import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  catchError,
  combineLatest,
  filter,
  Observable,
  of,
  Subscription,
  switchMap,
} from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { RClienteOrigenTipo } from 'src/app/core/types/Operaciones/RClienteOrigenTipo.type';
import { DireccionService } from 'src/app/services/direccion/direccion.service';
import { DireccionesReactivasService } from 'src/app/shared/helpers/orden/direcciones-reactivas.service';
import { EventosReactivosService } from 'src/app/shared/helpers/orden/eventos-reactivos.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomDireccionRemitenteComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-direccion-remitente',
  templateUrl: './custom-direccion-remitente.component.html',
  styleUrls: ['./custom-direccion-remitente.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomDireccionRemitenteComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  direccionRemitenteControl: FormControl;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  isDisabled = false;
  value: Estandar;
  @Input() label: string = 'Direccion';
  direccionesRemitente: Estandar[] = [];

  @Input() clienteOrigenTipo: RClienteOrigenTipo = {
    idCliente: 0,
    idAgencia: 0,
    idTipo: 0,
  };

  constructor(
    private alertService: AlertService,
    private direccionService: DireccionService,
    private direccionesReactivasService: DireccionesReactivasService,
    private eventReactivoService: EventosReactivosService
  ) {
    this.direccionRemitenteControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.suscribirseADatosRemitente();
  }

  suscribirseADatosRemitente(): void {
    this.subscription.add(
      combineLatest([
        this.direccionesReactivasService.remitente$.pipe(filter(Boolean)),
        this.direccionesReactivasService.agenciaRemitente$.pipe(
          filter(Boolean)
        ),
        this.eventReactivoService.getEvent('tipoRecepcion'),
      ])
        .pipe(
          switchMap(([remitente, agencia, event]) => {
            if (event.id !== 2) {
              return of([]);
            }

            return this.loadDireccionesRemitente(remitente.id, agencia.id);
          })
        )
        .subscribe({
          next: (response) => (this.direccionesRemitente = [...response]),
          error: (error) =>
            this.handleError(error, 'Error al cargar direcciones'),
        })
    );
  }

  private handleError(error: any, customMessage?: string): void {
    this.alertService.showError(
      'Ups..',
      customMessage || 'Ocurrió un error en el proceso'
    );
  }

  loadDireccionesRemitente(
    idCliente: number,
    idAgencia: number
  ): Observable<Estandar[]> {
    return this.direccionService
      .listarByIdClienteByIdAgenciaService$(idCliente, idAgencia)
      .pipe(
        catchError((error) => {
          this.alertService.showError(
            'Ups..',
            'Ocurrió un error al cargar las direcciones del remitente'
          );
          return of([]); // Return an empty array on error
        })
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(obj: Estandar): void {
    this.value = obj;
    this.direccionRemitenteControl.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn; // Registra la función para manejar cambios de valor
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Registra la función para manejar el evento "tocado"
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (isDisabled) {
      this.direccionRemitenteControl.disable({ emitEvent: false });
    } else {
      this.direccionRemitenteControl.enable({ emitEvent: false });
    }
  }

  handleValueChange(event: any): void {
    const selectedValue = event.value; // Captura el valor seleccionado
    this.onChange(selectedValue); // Notifica al formulario reactivo
    this.onTouched(); // Marca el control como "tocado"
  }
}
