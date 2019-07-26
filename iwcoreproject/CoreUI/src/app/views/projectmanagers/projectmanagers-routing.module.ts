import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectmanagersComponent } from './projectmanagers.component';
import { AddProjectmanagersComponent } from './add-projectmanagers/add-projectmanagers.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectmanagersComponent,
    data: {
      title: 'Project Managers'
    }
  },
  {
    path: 'add-projectmanagers',
    component: AddProjectmanagersComponent,
    data: {
      title: 'Add New Project Managers'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectmanagersRoutingModule { }
