import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { InputMaskModule } from 'primeng/inputmask';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [],
  exports: [
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    StyleClassModule,
    CalendarModule,
    InputNumberModule,
    CheckboxModule,
    DialogModule,
    TableModule,
    ToastModule,
    MultiSelectModule,
    SidebarModule,
    TagModule,
    FieldsetModule,
    SplitButtonModule,
    MenuModule,
    InputSwitchModule,
    ConfirmPopupModule,
    SelectButtonModule,
    ToggleButtonModule,
    RadioButtonModule,
    SpinnerModule,
    ProgressSpinnerModule,
    InputMaskModule,
    DividerModule
    
  ],
})
export class MaestrosPrimeNgModule {}
