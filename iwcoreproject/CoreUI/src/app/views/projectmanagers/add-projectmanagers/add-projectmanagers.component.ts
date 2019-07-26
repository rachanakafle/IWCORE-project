import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { UserService } from '../../../_services/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-projectmanagers',
  templateUrl: './add-projectmanagers.component.html',
  styleUrls: ['./add-projectmanagers.component.scss']
})
export class AddProjectmanagersComponent {
    submitted=false;
    fileToUpload:File = null;
    imageUrl:string;
    projectManagerForm = new FormGroup({
        first_name: new FormControl("",Validators.required),
        last_name: new FormControl("",Validators.required),
        email: new FormControl("",Validators.required),
        password: new FormControl("",(Validators.required,Validators.minLength[6])),
        address:new FormControl(""),
    contact:new FormControl(""),
    photo:new FormControl(""),
      });

      get f()
      {
          return this.projectManagerForm.controls;
      }
  constructor(private userService: UserService,public route: Router) { }
  onSubmit() {
    this.submitted= true;

    if(this.projectManagerForm.invalid){
        return;
    }
    this.projectManagerForm.value.groups = [2];
    this.userService.postUser(this.projectManagerForm.value,this.fileToUpload).subscribe(data => {
        if (data) {
          this.userService.PostUserProfile(data).subscribe(response => {
            this.route.navigate(["projectmanagers"]);
          });
        }
      });}
  
handleFileInput(files){
    this.fileToUpload = files.target.files[0];
    
}


}
