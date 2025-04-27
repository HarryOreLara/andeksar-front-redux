import { Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, Signal, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {  Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { UnidadMedidaService } from 'src/app/services/unidad/unidad.service';
import { TablaSunat } from 'src/app/shared/enums';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomUnidadMedidaDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-unidad-medida-dropdown',
  templateUrl: './custom-unidad-medida-dropdown.component.html',
  styleUrls: ['./custom-unidad-medida-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class CustomUnidadMedidaDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor, OnChanges
{
  private subscription: Subscription = new Subscription();
  unidadMedidaControl:FormControl;
  tiposComprobantes: Estandar[] = []; 

  onChange: (value: any) => void = () => {}; 
  onTouched: () => void = () => {}; 
  isDisabled = false; 
  value: Estandar; 


  @Input() tablaSunat: TablaSunat = TablaSunat.TIPO_COMPROBANTE;
  @Input() label: string = 'Tipo'; 

  constructor(
    private unidadMedidaService: UnidadMedidaService,
    private alertService: AlertService
  ) {
    this.unidadMedidaControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.loadTipoComprobante();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tablaSunat']) {
      this.loadTipoComprobante();
    }
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Asignar el valor
    this.unidadMedidaControl.patchValue(obj); // Actualiza el valor del control
  }

  registerOnChange(fn: any): void {
    this.onChange = fn; // Registra la función para manejar cambios de valor
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // Registra la función para manejar el evento "tocado"
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled; // Cambia el estado de deshabilitado
  }

  loadTipoComprobante() {
    if(this.tablaSunat == TablaSunat.NINGUNO) return;
    this.subscription.add(
      this.unidadMedidaService
        .listarUnidadMedidaService$(this.tablaSunat)
        .subscribe({
          next: (res: Estandar[]) => {
            this.tiposComprobantes = res;
          },
          error: (err) => {
            this.alertService.showError(
              'Ups..',
              'Error al cargar el tipo de comprobante'
            );
          },
        })
    );
  }

  handleValueChange(event: any): void {
    const selectedValue = event.value; 
    this.onChange(selectedValue); 
    this.onTouched(); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.tiposComprobantes = [];
    this.tablaSunat = TablaSunat.NINGUNO;
  }
}
