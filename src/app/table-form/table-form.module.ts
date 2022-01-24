import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapitalizePipe, RoundPipe } from "./table/pipes";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaptionDirective, DateDirective } from "./table/directives";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { OffLineService } from "./services/off-line.service";
import { OnLineService } from "./services/on-line.service";
import { DATA_SERVICE } from "./token";

@NgModule({
  declarations: [
    CapitalizePipe,
    CaptionDirective,
    DateDirective,
    FormComponent,
    RoundPipe,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [TableComponent],
  providers: [
    {
      provide: DATA_SERVICE,
      useFactory: (
        activateRoute: ActivatedRoute,
        http: HttpClient,
      ): OffLineService | OnLineService => {
        return activateRoute.snapshot.queryParams["debug"] === "true"
          ? new OffLineService(http)
          : new OnLineService(http);
      },
      deps: [ActivatedRoute, HttpClient],
    },
  ],
})
export class TableFormModule {}
