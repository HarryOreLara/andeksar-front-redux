import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { AgenciaService } from 'src/app/services/agencia/agencia.service';
import { AgenciaSeleccionService } from 'src/app/shared/helpers/agencias/agencia-seleccion.service';
import { DireccionesReactivasService } from 'src/app/shared/helpers/orden/direcciones-reactivas.service';
import { EventResetObjetosComunesService } from 'src/app/shared/helpers/orden/event-reset-objetos-comunes.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomAgenciasDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-agencias-dropdown',
  templateUrl: './custom-agencias-dropdown.component.html',
  styleUrls: ['./custom-agencias-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomAgenciasDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();

  agencias: Estandar[] = [];

  @Input() label: string = 'Agencia';
  @Input() state: string = 'Agencia';
  @Input() isDireccionReactiva: boolean = false;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  isDisabled = false;
  value: Estandar;

  agenciasControl: FormControl;
  constructor(
    private readonly agencyService: AgenciaService,
    private direccionesReactivasService: DireccionesReactivasService,
    private eventResetObjetosComunesService: EventResetObjetosComunesService,
        private agenciaSeleccionService: AgenciaSeleccionService
  ) {
    this.agenciasControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.loadAgency();

    this.agenciaSeleccionService.agencies$.subscribe((agencies) => {
      this.agencias = agencies;
    })
  }

  private loadAgency(): void {
    this.subscription.add(
      this.agencyService.listarAgenciaServiceDropdown$().subscribe({
        next: (res: Estandar[]) => {
          console.log(res);
          this.agenciaSeleccionService.setAgencies(res);
          this.agencias = res;
        },
      })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj;
    this.agenciasControl.patchValue(obj);

    switch (this.state) {
      case 'Origen':
        this.direccionesReactivasService.setAgenciaRemitente(obj);
        break;
      case 'Destino':
        this.direccionesReactivasService.setAgenciaDestinatario(obj);
        break;
      default:
        break;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (isDisabled) {
      this.agenciasControl.disable({ emitEvent: false });
    } else {
      this.agenciasControl.enable({ emitEvent: false });
    }
  }

  handleValueChange(event: any): void {
    this.eventResetObjetosComunesService.triggerObjetosComunesReset();

    const selectedValue = event.value;

    this.onChange(selectedValue);

    if (!this.isDireccionReactiva) return;

    switch (this.state) {
      case 'Origen':
        this.direccionesReactivasService.setAgenciaRemitente(selectedValue);
        break;
      case 'Destino':
        this.direccionesReactivasService.setAgenciaDestinatario(selectedValue);
        break;
      default:
        break;
    }

    this.onTouched();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
