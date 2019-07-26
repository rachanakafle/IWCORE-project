import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DevelopersModule } from "../developers/developers.module";
import { PartnersModule } from "../partners/partners.module";
import { ProjectmanagersModule } from "../projectmanagers/projectmanagers.module";
import { CommonModule } from "@angular/common";
import { ProjectsModule } from "../projects/projects.module";
import{UsersModule} from "../users/users.module";
import { AddprojectComponent } from "../projects/addProject/addproject/addproject.component";

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    PartnersModule,
    ProjectmanagersModule,
    DevelopersModule,
    ProjectsModule,
    UsersModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
