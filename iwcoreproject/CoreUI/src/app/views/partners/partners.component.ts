import { Component, OnInit } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, Route } from "@angular/router";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
  providers: [UserService]
})
export class PartnersComponent implements OnInit {
  data: any;
  closeResult: string;
  profileForm: FormGroup;
  forPopOver: string;
  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    public route: Router
  ) {}

  //Tp get Partner's data form _service
  getPartnerData() {
    this.userService.getPartnerData().subscribe(data => {
      this.data = data;
    });
  }

  //To console the values when onclick Submit button
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  //For Pop-ups when onclick in Edit tab and values in the input boxes
  open(content, user) {
    console.log(user);
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

  //detail ko popup ko lagi
  opendetail(content, sth) {
    this.forPopOver = ` 
<div class="container">
    <div class="row">
        <div class="col">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-5">
                        <img src="${
                          sth.user.photo
                        }" width="250px" height="250px" style="border-radius:50%" alt="" class="rounded-circle" />
                    </div>
                    <div class="col-sm-6 col-md-7">
                    <h2><strong><cite title=${sth.user.partner_name}>${
      sth.user.partner_name
    }<i class="glyphicon glyphicon-map-marker">
                        </i></cite></strong></h2>
                        <h3>CEO : ${sth.user.first_name}&nbsp;${sth.user.last_name} </h3>
                        <h5><i class="icon-envelope"></i>&nbsp;<a href="${sth.user.email}">${sth.user.email}</a></h5>
                            <h3><i class="icon-phone"></i>&nbsp;${sth.user.contact}</h3>
                            <h3><i class="icon-home"></i>&nbsp;${sth.user.address}</h3>
   <br/>
                      <h3>List of Projects:</h3>
                     <h4><a href="abc project">abc project</a></h4>
                    <h4><a href="pqr project">pqr project</a></h4>
                   <h4><a href="xyz project">xyz project</a></h4>
                   <h4><a href="qwerty project">qwerty project</a></h4>
                   <h4><a href="our project">our project</a></h4>


                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

    this.modalService
      .open(content, { centered: true , size: 'lg',ariaLabelledBy: "modal-basic-title"})
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

  //To delete the row using its id
  delete(id) {
    console.log("Deleted id is ", id);
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log("Data Deleted");
        this.route.navigate(["dashboard"]);
      },
      error => {
        console.log("Backend Bata error aako");
      }
    );
  }

  //To update the values of the users
  updateUser(id) {
    this.profileForm.value.groups = [Number(this.profileForm.value.groups)];
    return this.userService.updateUser(id, this.profileForm.value).subscribe(
      data => {
        this.route.navigate(["dashboard"]);
      },
      error => {
        console.log(error);
      }
    );
  }
  //sorting
  key: string = "partner_name";

  reverse: boolean = false;

  sort(key) {
    this.key = key;

    this.reverse = !this.reverse;
  }
  //pagination
  p: number = 1;
  ngOnInit() {
    this.getPartnerData();
  }
}
