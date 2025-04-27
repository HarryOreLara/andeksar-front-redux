import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { TipoEntregaService } from 'src/app/services/tipo-entrega/tipo-entrega.service';
import { EventosReactivosService } from 'src/app/shared/helpers/orden/eventos-reactivos.service';
import { AlertService } from 'src/app/shared/services/alert.service';

const VALUE_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TipoRecepcionDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-tipo-recepcion-dropdown',
  templateUrl: './tipo-recepcion-dropdown.component.html',
  styleUrls: ['./tipo-recepcion-dropdown.component.css'],
  providers: [VALUE_ACCESOR],
})
export class TipoRecepcionDropdownComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private subscription: Subscription = new Subscription();
  tiposDeliverys: Estandar[] = [];
  @Output() onSelectedTypeDelivery: EventEmitter<Estandar> = new EventEmitter<Estandar>();
  @Input() label: string = 'Tipo'; // Etiqueta del control
  
  onChange: (value: any) => void = () => {}; // Función que Angular ejecutará cuando el valor cambie
  onTouched: () => void = () => {}; // Función que Angular ejecutará cuando el control sea tocado
  isDisabled = false; // Estado de deshabilitado
  value: Estandar; // Valor actual del control


  tipoRecepcionControl:FormControl;



  constructor(
    private readonly typeDeliveryService: TipoEntregaService,
    private alertService: AlertService,
    private eventReactivoService: EventosReactivosService
  ) {
    this.tipoRecepcionControl = new FormControl({
      value: null,
      disabled: this.isDisabled,
    });
  }

  ngOnInit(): void {
    this.loadTypeDelivery();
  }

  private loadTypeDelivery(): void {

    this.subscription.add(
      this.typeDeliveryService.listarTipoEntregaService$().subscribe({
        next: (res: Estandar[]) => {
          this.tiposDeliverys = res;
        },
        error: (err) => {
          this.alertService.showError(
            'Ups..!!',
            'El Tipo de Entrega no puede cargar. Contacte al administrador, para solucionar el problema'
          );
        },
      })
    );
  }

  // Métodos de ControlValueAccessor
  writeValue(obj: Estandar): void {
    this.value = obj; // Establece el valor inicial del control
    this.tipoRecepcionControl.patchValue(obj); // Actualiza el valor del control
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



  handleValueChange(event: any): void {
    const typeDelivery:Estandar = event.value;
    this.onSelectedTypeDelivery.emit(typeDelivery);

    const selectedValue = event.value; // Captura el valor seleccionado
    this.onChange(selectedValue); // Notifica al formulario reactivo

    switch (this.label) {

      case 'Tipo Recepción':
        this.eventReactivoService.emitEvent('tipoRecepcion', typeDelivery);
        break;
      case 'Tipo Entrega':
        this.eventReactivoService.emitEvent('tipoEntrega', typeDelivery);
        break;
    }


    this.onTouched(); // Marca el control como "tocado"
  }




  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
