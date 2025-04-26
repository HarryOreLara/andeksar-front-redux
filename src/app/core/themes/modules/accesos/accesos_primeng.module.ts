import { Input, NgModule } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ProgressBarModule } from "primeng/progressbar";
import { SliderModule } from "primeng/slider";
import { StyleClassModule } from "primeng/styleclass";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";

import { OrganizationChartModule } from 'primeng/organizationchart';
import { SplitterModule } from 'primeng/splitter';
import { TreeModule } from 'primeng/tree'; 
import { SpinnerModule } from "src/app/shared/components/spinner/spinner.module";
import { ToolbarModule } from "primeng/toolbar";
import { InputSwitchModule } from "primeng/inputswitch";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { PanelModule } from 'primeng/panel';
@NgModule({
    declarations: [],
    imports: [
        StyleClassModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        DividerModule,
        TagModule,
        DropdownModule,
        ToggleButtonModule,
        ProgressBarModule,
        MultiSelectModule,
        SliderModule,
        ToastModule,
        OrganizationChartModule,
        TreeModule,
        SplitterModule,
        SpinnerModule,
        ToolbarModule,
        InputSwitchModule,
        CheckboxModule,
        DialogModule,
        PanelModule
    ],
    providers: [
        MessageService, ConfirmationService
    ],
    exports: [
        StyleClassModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        DividerModule,
        TagModule,
        DropdownModule,
        ToggleButtonModule,
        ProgressBarModule,
        MultiSelectModule,
        SliderModule,
        ToastModule,
        OrganizationChartModule,
        TreeModule,
        SplitterModule,
        SpinnerModule,
        ToolbarModule,
        InputSwitchModule,
        CheckboxModule,
        DialogModule,
        PanelModule

    ]
})
export class AccesosPrimeNgModule{}