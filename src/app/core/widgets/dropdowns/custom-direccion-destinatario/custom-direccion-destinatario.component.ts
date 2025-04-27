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
import { DireccionService } from 'src/app/services/direccion/direccion.service';
import { DireccionesReactivasService } from 'src/app/shared/helpers/orden/direcciones-reactivas.service';
import { EventosReactivosService } from 'src/app/shared/helpers/orden/eventos-reactivos.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomDireccionDestinatarioComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-direccion-destinatario',
  templateUrl: './custom-direccion-destinatario.component.html',
  styleUrls: ['./custom-direccion-destinatario.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomDireccionDestinatarioComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  direccionDestinatarioControl: FormControl;

  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control

  @Input() label: string = 'Direccion del Destinatario'; // Etiqueta del control
  direccionesDestinatario: Estandar[] = []; //**Direcciones del destinatario */

  constructor(
    private alertService: AlertService,
    private direccionService: DireccionService,
    private direccionesReactivasService: DireccionesReactivasService,
    private eventReactivoService: EventosReactivosService
  ) {
    this.direccionDestinatarioControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.suscribirseADatosDestinatario();
  }

  suscribirseADatosDestinatario(): void {
    this.subscription.add(
      combineLatest([
        this.direccionesReactivasService.destinatario$.pipe(filter(Boolean)),
        this.direccionesReactivasService.agenciaDestinatario$.pipe(
          filter(Boolean)
        ),
        this.eventReactivoService.getEvent('tipoEntrega'),
      ])
        .pipe(
          switchMap(([remitente, agencia, event]) => {
            if (event.id !== 2) {
              return of([]);
            }
            return this.loadDireccionesDestinatario(remitente.id, agencia.id);
          })
        )
        .subscribe({
          next: (response) => (this.direccionesDestinatario = [...response]),
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

  loadDireccionesDestinatario(
    idCliente: number,
    idAgencia: number
  ): Observable<Estandar[]> {
    return this.direccionService
      .listarByIdClienteByIdAgenciaService$(idCliente, idAgencia)
      .pipe(
        catchError((error) => {
          this.alertService.showError(
            'Ups..!!',
            'Error al cargar las direcciones del destinatario'
          );
          return of([]);
        })
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  writeValue(obj: Estandar): void {
    this.value = obj;
    this.direccionDestinatarioControl.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleValueChange(event: any): void {
    const selectedValue = event.value;
    this.onChange(selectedValue);
    this.onTouched();
  }
}
