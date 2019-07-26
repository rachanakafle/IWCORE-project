import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectmanagersComponent } from './projectmanagers.component';
import { ProjectmanagersRoutingModule } from './projectmanagers-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProjectmanagersComponent } from './add-projectmanagers/add-projectmanagers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [ProjectmanagersComponent, AddProjectmanagersComponent],
  imports: [
    CommonModule,
    ProjectmanagersRoutingModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    NgbModule, 
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,


  ]
})
export class ProjectmanagersModule { }
