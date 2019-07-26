import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../../_services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-users",
  templateUrl: "./add-users.component.html",
  styleUrls: ["./add-users.component.scss"]
})
export class AddUsersComponent implements OnInit {
  submitted = false;
  fileToUpload: File = null;
  imageUrl: string;

  addUsersForm = new FormGroup({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl(
      "",
      (Validators.required, Validators.minLength[6])
    ),
    groups: new FormControl("", Validators.required),
    address: new FormControl(""),
    contact: new FormControl(""),
    photo: new FormControl(""),
    position: new FormControl("")
  });
  
  get f() {
    return this.addUsersForm.controls;
  }

  constructor(private userService: UserService, public route: Router) {}
  onSubmit() {
    this.submitted = true;
    if (this.addUsersForm.invalid) {
      return;
    }
    this.addUsersForm.value.groups = [Number(this.addUsersForm.value.groups)];
    this.userService
      .postUser(this.addUsersForm.value,this.fileToUpload)
      .subscribe(data => {
        this.userService.PostUserProfile(data).subscribe(res => {
          this.route.navigate(["all-users"]);
        });
      });
    console.log(this.addUsersForm.value);
  }
  ngOnInit() {}

  handleFileInput(files) {
    // this.fileToUpload = files.item[0];
    // var reader = new FileReader();
    // reader.onload = (event: any) => {
    //   this.imageUrl = event.target.result;
    // };
    // reader.readAsDataURL(this.fileToUpload);
    // console.log(this.fileToUpload);

    //\
    // var reader = new FileReader();
    // reader.readAsDataURL(files.target.files[0]);
    // reader.onload = (event:any)=>{
    //   this.imageUrl=event.target.result;
    //   console.log(this.imageUrl)
    // }
    this.fileToUpload = files.target.files[0];
  }
}
