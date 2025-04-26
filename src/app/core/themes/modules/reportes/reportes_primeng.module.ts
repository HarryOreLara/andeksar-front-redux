import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { StyleClassModule } from "primeng/styleclass";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from "src/app/shared/components/spinner/spinner.module";
import { MenuModule } from "primeng/menu";
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from "primeng/dialog";
import { CalendarModule } from "primeng/calendar";
import { BadgeModule } from 'primeng/badge';
@NgModule({
    imports: [],
    exports: [
        StyleClassModule,
        TableModule,
        ProgressSpinnerModule,
        ToolbarModule,
        ToastModule,
        MultiSelectModule,
        CheckboxModule,
        TagModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        MenuModule,
        SpinnerModule,
        CalendarModule,
        BadgeModule,
        DialogModule,
        SplitButtonModule
    ],
  })
  export class ReportesPrimeNgModule {}
  