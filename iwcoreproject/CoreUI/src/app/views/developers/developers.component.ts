import { Component, OnInit } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { NgbModal,NgbPopover, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, Route } from "@angular/router";
import { modalConfigDefaults } from "ngx-bootstrap/modal/modal-options.class";

@Component({
  selector: "app-developers",
  templateUrl: "./developers.component.html",
  styleUrls:["./developers.component.scss"],
  providers: [UserService]
})
export class DevelopersComponent implements OnInit {
  data: any;
  closeResult: string;
  profileForm: FormGroup;
  

  forPopOver:string;
  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    public route: Router
  ) {}


  
  getDeveloperData() {
    this.userService.getDeveloperData().subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  getUserDetailData() {
    this.userService.getUserDetail().subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.log(error);
      }
    );
  }
 

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

//sort and pagination
  key: string = 'first_name';
  
  reverse: boolean = false;

  sort(key){

    this.key = key;

    this.reverse = !this.reverse;

  }
  p: number = 1; 


  ngOnInit() {
    this.getDeveloperData();
  }

  open(content, user) {
    this.profileForm = new FormGroup({
      first_name: new FormControl(`${user.first_name}`, {
        updateOn: "submit"
      }),
      last_name: new FormControl(`${user.last_name}`, {
        updateOn: "submit"
      }),
      email: new FormControl(`${user.email}`, {
        updateOn: "submit"
      }),
      address: new FormControl(`${user.address}`, {
        updateOn: "submit"
      }),
      contact: new FormControl(`${user.contact}`, {
        updateOn: "submit"
      }),
      groups: new FormControl(`${user.groups[0]}`, {
        updateOn: "submit"
      }),
      
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


  opendetail(content,sth){
    this.forPopOver=
    `
<div class="container">
    <div class="row">
        <div class="col">
            <div class="well well-sm">
                <div class="row">
                <div class="col-sm-6 col-md-5">
                <img src="${sth.user.photo}" width="150px" height="150px" style="border-radius:50%"
                 alt="" class="rounded-circle" />
            </div>
                    <div class="col-sm-6 col-md-7">
                        <h3><strong>${sth.user.first_name}&nbsp;${sth.user.last_name}</strong></h3>
                            <br />
                            <h5><i class="icon-envelope"></i><a href="${sth.user.email}">&nbsp;${sth.user.email}</a></h5>
                            
                            <h3><i class="icon-phone"></i>&nbsp;${sth.user.contact}</h3>
                            
                            <h3><i class="icon-home"></i>&nbsp;${sth.user.address}</h3>
 </div>
 </div>
        </div>
    </div>
</div>`

   this.modalService
   .open(content, { centered: true,ariaLabelledBy: "modal-basic-title" })
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

  updateUser(id) {
    this.profileForm.value.groups = [Number(this.profileForm.value.groups)];
    return this.userService.updateUser(id, this.profileForm.value).subscribe(
      data => {
        this.route.navigate(["dashboard"]);
      }
    );
  }

  delete(id) {

    this.userService.deleteUser(id).subscribe(
      data => {
        console.log("Data Deleted");
        this.route.navigate(["developers"]);
      },
      error => {
        console.log(error);
      }
    );
  }

}
