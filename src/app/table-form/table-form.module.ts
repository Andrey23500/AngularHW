import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapitalizePipe, RoundPipe } from "./table/pipes";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaptionDirective, DateDirective } from "./table/directives";

@NgModule({
  declarations: [
    CapitalizePipe,
    CaptionDirective,
    DateDirective,
    FormComponent,
    RoundPipe,
    TableComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TableComponent],
})
export class TableFormModule {}
