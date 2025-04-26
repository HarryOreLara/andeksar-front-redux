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
import { DialogModule } from "primeng/dialog";
import { CalendarModule } from "primeng/calendar";
import { SelectButtonModule } from "primeng/selectbutton";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { SpinnerModule } from "src/app/shared/components/spinner/spinner.module";
import { InputMaskModule } from "primeng/inputmask";
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
        CalendarModule,
        DialogModule,
        SelectButtonModule,
        InputTextareaModule,
        InputNumberModule,
        SpinnerModule,
        InputMaskModule,
    ],
  })
  export class CajaPrimeNgModule {}
  