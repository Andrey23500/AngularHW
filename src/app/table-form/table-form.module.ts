import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapitalizePipe, RoundPipe } from "./table/pipes";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaptionDirective, DateDirective } from "./table/directives";
import { RouterModule } from "@angular/router";
import { OffLineService } from "./services/off-line.service";
import { OnLineService } from "./services/on-line.service";

@NgModule({
  declarations: [
    CapitalizePipe,
    CaptionDirective,
    DateDirective,
    FormComponent,
    RoundPipe,
    TableComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [TableComponent],
  providers: [
    // {
    //   provide: StudentService,
    //   useFacory: (): StudentService => {
    //     return window.location.search
    //       ? new OffLineService()
    //       : new OnLineService();
    //   },
    // },
  ],
})
export class TableFormModule {}
