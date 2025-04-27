import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { FormaPago } from 'src/app/core/class/pagos/FormaPago.class';
import { createNuevaFormaPagoForm } from 'src/app/core/forms/maestros/forma-pago/forma-pago.form';
import { FormaPagoService } from 'src/app/services/forma-pago/forma-pago.service';
import { ActivosState } from 'src/app/shared/enums';
import { convertToJsonFormaPago } from 'src/app/shared/functions/maestros.functions';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-nueva-forma-pago',
  templateUrl: './nueva-forma-pago.component.html',
  styleUrls: ['./nueva-forma-pago.component.css'],
})
export class NuevaFormaPagoComponent {
  @Input() isNuevaFormaPago: boolean = false;
  @Input() formaPago: FormaPago = new FormaPago();
  @Output() onHideEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  stateOptions: Estandar[] = [
    new Estandar({
      id: ActivosState.ACTIVO,
      descripcion: 'Activo',
    }),
    new Estandar({
      id: ActivosState.INACTIVO,
      descripcion: 'Inactivo',
    }),
  ];

  formaPagoForm = createNuevaFormaPagoForm(this.fb);

  constructor(
    private readonly fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly formaPagoService: FormaPagoService
  ) {}

  onShow() {}

  onHide() {
    this.onHideEmit.emit(false);
  }

  crearFormaPago() {
    const formaPago = convertToJsonFormaPago(this.formaPagoForm);
    switch (this.formaPago.id) {
      case 0:
        this.guardarFormaPago(formaPago);
        break;
      default:
        this.actualizarFormaPago(formaPago);
        break;
    }
  }

  guardarFormaPago(formaPago: FormaPago) {}
  actualizarFormaPago(formaPago: FormaPago) {}
}
