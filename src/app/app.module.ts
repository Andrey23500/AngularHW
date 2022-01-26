import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TableFormModule } from "./table-form/table-form.module";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { routing } from "./app.routing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StudentsEffects } from "./store/effects/srudents.effects";
import { appReducers } from "./store/state";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent],
  imports: [
    BrowserModule,
    routing,
    TableFormModule,
    EffectsModule.forRoot([StudentsEffects]),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(appReducers),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
