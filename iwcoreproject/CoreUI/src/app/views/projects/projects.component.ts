import { Component, OnInit } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, Route } from "@angular/router";
import { modalConfigDefaults } from "ngx-bootstrap/modal/modal-options.class";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  providers: [UserService]
})
export class ProjectsComponent implements OnInit {
  data: any;
  closeResult: string;
  forPopOver: string;


  //update profile ko popup form ko lagi
  disabledd = false;
  developers: any[];
  developer: any[];
  partner: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  projectManager: any = [];
  myDevelopers: any = [];

  projectForm: FormGroup;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    public route: Router
  ) { }

  getProjectData() {
    this.userService.getProject().subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  //update form ko field ma developer,partner ra pm lyaune lai
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
  ngOnChanges() {
    this.getProjectManager();
  }
  //sorting
  key: string = 'project_name';

  reverse: boolean = false;

  sort(key) {

    this.key = key;

    this.reverse = !this.reverse;
  }
  //pagination
  p: number = 1;



  ngOnInit() {
    this.getProjectData();
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

  //delete the projects displayed
  delete(id) {
    console.log(id);
    this.userService.deleteProject(id).subscribe(
      datas => {
        // this.route.navigate(["projects"]);
        this.getProjectData();
      },
      error => {
        console.log(error);
      }
    );
  }

  //update the project lists
  updateProject(id) {
    this.projectForm.value.developer = this.projectForm.value.developer.map(
      item => item.id
    );
    this.projectForm.value.project_manager = Number(
      this.projectForm.value.project_manager
    );
    this.projectForm.value.partner = Number(this.projectForm.value.partner);
    return this.userService.updateProject(id, this.projectForm.value).subscribe(
      data => {
        this.getProjectData()
      },
      error => {
        console.log("error");
      }
    );
  }

  //button ma click garda popup open garna lai
  open(content, sth) {
    this.myDevelopers = sth.developer.map(item => {
      return { id: item.id, first_name: item.user.first_name };
    });
    this.projectForm = new FormGroup({
      project_name: new FormControl(`${sth.project_name}`, {
        updateOn: "submit"
      }),
      partner: new FormControl(`${sth.partner.id}`, {
        updateOn: "submit"
      }),
      project_manager: new FormControl(`${sth.project_manager.id}`, {
        updateOn: "submit"
      }),
      developer: new FormControl(``, {
        updateOn: "submit"
      }),
      theme: new FormControl(`${sth.theme}`, {
        updateOn: "submit"
      }),
      status: new FormControl(`${sth.status}`, {
        updateOn: "submit"
      }),
      start_date: new FormControl(`${sth.start_date}`, {
        updateOn: "submit"
      }),
      end_date: new FormControl(`${sth.end_date}`, {
        updateOn: "submit"
      })
    });



    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }


  opendetail(content, sth) {
    this.forPopOver =
      //    `<ul class="list-group">
      //    <li class="list-group-item">Project ID:${sth.id}</li>
      //    <li class="list-group-item">Project Name:${sth.project_name}</li>
      //    <li class="list-group-item">Partner:${sth.partner.user.first_name}</li>
      //    <li class="list-group-item">Project Manager:${sth.project_manager.user.first_name}</li>
      //    <li class="list-group-item">Developer associated:${sth.developer.id}</li>
      //    <li class="list-group-item">Project startdate:${sth.start_date}</li>
      //    <li class="list-group-item">Project enddate:${sth.end_date}</li>
      //    <li class="list-group-item">Proj${sth.status}ect status:</li>
      //    <li class="list-group-item">Theme of the project:${sth.theme}</li>
      //  </ul>`;


      `<div class="container">
    <div class="row">
        <div class="col">
                  
                       
                       
                    <h2><strong><u>${sth.project_name}</u></strong></h2>
                    <br />
                            <h4><i class="icon-user"></i>&nbsp;<b>Partner:</b> ${sth.partner.user.first_name}</h4>
                            <h4><i class="icon-user"></i>&nbsp;<b>Project Manager:</b> ${sth.project_manager.user.first_name}</h4>
                            <h4><i class="icon-people"></i>&nbsp;<b>Developers:</b> ${sth.developer.first_name}</h4>
                            <h4><i class="icon-speedometer"></i>&nbsp;<b>Start Date:</b> ${sth.start_date}</h4>
                            <h4><i class="icon-speedometer"></i>&nbsp;<b>End Date:</b> ${sth.end_date}</h4>
                            <h4><i class="icon-info"></i>&nbsp;<b>Project Status:</b> ${sth.status}</h4>
                            <h4><i class="icon-grid"></i>&nbsp;<b>Theme of the project:</b> ${sth.theme}</h4>
        </div>
    </div>
</div>`


    this.modalService
      .open(content, { centered: true, ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }




  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
