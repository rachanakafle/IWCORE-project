import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersComponent } from './developers.component';
import { DevelopersRoutingModule } from './developers-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDevelopersComponent } from './add-developers/add-developers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [DevelopersComponent, AddDevelopersComponent],
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    BsDropdownModule.forRoot(),
    NgbModule, 
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,

  ]
})
export class DevelopersModule { }
