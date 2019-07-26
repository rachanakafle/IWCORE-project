import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../../_services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-partners",
  templateUrl: "./add-partners.component.html",
  styleUrls: ["./add-partners.component.scss"]
})
export class AddPartnersComponent {
  submitted = false;
  fileToUpload: File = null;
  imageUrl: string;
  partnerForm = new FormGroup({
    partner_name: new FormControl("", Validators.required),
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", (Validators.required, Validators.minLength[6])),
    address: new FormControl(""),
    contact: new FormControl(""),
    photo: new FormControl(""),
  });
  get f() {
    return this.partnerForm.controls;
  }
  constructor(private userService: UserService, public route: Router) { }
  onSubmit() {
    this.submitted = true;

    if (this.partnerForm.invalid) {
      return;
    }
    this.partnerForm.value.groups = [3];
    this.userService.postUser(this.partnerForm.value, this.fileToUpload).subscribe(data => {
      if (data) {
        this.userService.PostUserProfile(data).subscribe(response => {
          this.route.navigate(["partners"]);
        });
      }
    });
  }

  handleFileInput(files) {
    this.fileToUpload = files.target.files[0];

  }
}
