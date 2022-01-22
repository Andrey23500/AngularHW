import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TableFormModule } from "./table-form/table-form.module";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    TableFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
