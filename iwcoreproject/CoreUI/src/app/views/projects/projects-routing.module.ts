import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { AddprojectComponent } from "./addProject/addproject/addproject.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
    data: {
      title: "Projects"
    }
  },
  {
    path: "add-projects",
    component: AddprojectComponent,
    data: {
      title: "Add Project"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
