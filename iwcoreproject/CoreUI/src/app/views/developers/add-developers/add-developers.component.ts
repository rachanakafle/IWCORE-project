import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../../_services/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-developers',
  templateUrl: './add-developers.component.html',
  styleUrls: ['./add-developers.component.scss']
})
export class AddDevelopersComponent implements OnInit {
    submitted=false;
    fileToUpload:File = null;
    imageUrl:string;
    developerForm = new FormGroup({
        first_name: new FormControl("",Validators.required),
        last_name: new FormControl("",Validators.required),
        email: new FormControl("",Validators.required),
        password: new FormControl("",(Validators.required,Validators.minLength(6))),
        address:new FormControl(""),
    contact:new FormControl(""),
    photo:new FormControl(""),
        
      });

      get f()
      {
          return this.developerForm.controls;
      }
      
  constructor(private userService: UserService,public route: Router) { }
  onSubmit() {
      this.submitted= true;

    if(this.developerForm.invalid){
        return;
    }
    this.developerForm.value.groups = [1];
    this.userService.postUser(this.developerForm.value,this.fileToUpload).subscribe(data => {
        if (data) {
          this.userService.PostUserProfile(data).subscribe(response => {
            this.route.navigate(["developers"]);
          });
        }
      });}

  ngOnInit() {
  }
  handleFileInput(files){
    this.fileToUpload = files.target.files[0];

}

}


