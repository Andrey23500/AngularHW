import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { FormComponent } from "./table-form/form/form.component";
import { TableComponent } from "./table-form/table/table.component";

const routes: Routes = [
  { path: "addStudent", component: FormComponent },
  { path: "editStudent/:id", component: FormComponent },
  { path: "", component: TableComponent },
  { path: "404", component: NotFoundPageComponent },
  { path: "**", redirectTo: "/404" },
];

export const routing = RouterModule.forRoot(routes);
