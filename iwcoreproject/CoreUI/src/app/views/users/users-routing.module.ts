import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUsersComponent } from './add-users/add-users.component';


const routes: Routes = [
  {
    path: "",
    component:UsersComponent ,
    data: {
      title: "Users"
    }
  },

  {
    path: "add-new-users",
    component:AddUsersComponent,
    data: {
      title: "Add New Users"
    }
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
