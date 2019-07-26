import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DevelopersComponent } from "./developers.component";
import { AddDevelopersComponent } from './add-developers/add-developers.component';

const routes: Routes = [
  {
    path: "",
    component: DevelopersComponent,
    data: {
      title: "Developers"
    }
  },
  {
    path: "add-developers",
    component: AddDevelopersComponent,
    data: {
      title: "Add New Developers"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule {}
