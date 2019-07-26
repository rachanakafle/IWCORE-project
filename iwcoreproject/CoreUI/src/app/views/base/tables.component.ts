import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service'

@Component({
  templateUrl: 'tables.component.html',
  providers : [UserService]
})
export class TablesComponent {
  
  data: any;

  constructor(private api: UserService) {
    this.getTableData();
   }

   getTableData(){
     this.api.getDeveloperData().subscribe(
       data=>{
         this.data=data;
         console.log(data);
       },
       error=>{
         console.log(error);
       }
     )
   }

}
