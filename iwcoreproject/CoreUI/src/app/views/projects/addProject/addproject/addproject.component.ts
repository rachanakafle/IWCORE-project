import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { UserService } from "../../../../_services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-addproject",
  templateUrl: "./addproject.component.html",
  styleUrls: ["./addproject.component.scss"],
  providers: [UserService]
})
export class AddprojectComponent implements OnInit {
    submitted=false;
  disabledd = false;
  developers: any[];
  developer: any[];
  partner: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  projectManager: any = [];

  projectForm = new FormGroup({
    project_name: new FormControl("",Validators.required),
    partner: new FormControl("",Validators.required),
    project_manager: new FormControl("",Validators.required),
    developer: new FormControl("",Validators.required),
    theme: new FormControl("",),
    status: new FormControl("",),
    start_date: new FormControl("",),
    end_date: new FormControl("",)
  });
  get f()
  {
      return this.projectForm.controls;
  }
  constructor(private userService: UserService,public route: Router) {}

  getProjectManager() {
    this.userService.getPMData().subscribe(
      data => {
        this.projectManager = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  getDeveloper() {
    this.userService.getDeveloperData().subscribe(
      data => {
        this.developers = data.map(item => {
          return { id: item.id, first_name: item.user.first_name };
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  getPartner() {
    this.userService.getPartnerData().subscribe(
      data => {
        this.partner = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getProjectManager();
    this.getDeveloper();
    this.getPartner();

    this.dropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "first_name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onSubmit() {
    this.submitted= true;

    if(this.projectForm.invalid){
        return;
    }
      this.projectForm.value.developer =this.projectForm.value.developer.map(item=>item.id);
      this.projectForm.value.project_manager= Number(this.projectForm.value.project_manager);
      this.projectForm.value.partner=Number(this.projectForm.value.partner);

      this.userService.postProjects(this.projectForm.value).subscribe(
        data => {
            console.log(data);
            this.route.navigate(["projects"]);
        },
    );
  }
}
