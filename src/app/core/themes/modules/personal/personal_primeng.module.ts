import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { StyleClassModule } from 'primeng/styleclass';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    SidebarModule,
    StyleClassModule,
    PaginatorModule,
    MenuModule,
    CheckboxModule,
    SpinnerModule,
    RadioButtonModule,
    InputSwitchModule
  ],
})
export class PersonalPrimeNgModule {}
