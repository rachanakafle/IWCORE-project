import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './partners.component';
import { AddPartnersComponent } from './add-partners/add-partners.component';


const routes: Routes = [
  {
    path: '',
    component: PartnersComponent,
    data: {
      title: 'Partners'
    }
  },
  {
    path: 'add-partners',
    component: AddPartnersComponent,
    data: {
      title: 'Add New Partners'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PartnersRoutingModule { }











