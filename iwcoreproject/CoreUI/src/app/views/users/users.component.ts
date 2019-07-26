import { Component, OnInit } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { Router } from "@angular/router";
import {
  NgbModal,
  ModalDismissReasons
} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  data: any;
  closeResult: string;
  addUsersForm: FormGroup;
  forPopOver: string;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    public route: Router
  ) { }

  getUser() {
    this.userService.getUser().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.addUsersForm.value);
  // }

  //sorting
  key: string = "first_name";

  reverse: boolean = false;

  sort(key) {
    this.key = key;

    this.reverse = !this.reverse;
  }
  //pagination
  p: number = 1;

  ngOnInit() {
    this.getUser();
  }

  open(content, sth) {
    this.addUsersForm = new FormGroup({
      first_name: new FormControl(`${sth.first_name}`, {
        updateOn: "submit"
      }),
      last_name: new FormControl(`${sth.last_name}`, {
        updateOn: "submit"
      }),
      email: new FormControl(`${sth.email}`, {
        updateOn: "submit"
      }),
      groups: new FormControl(`${sth.groups}`, {
        updateOn: "submit"
      }),
      address: new FormControl(`${sth.address}`, {
        updateOn: "submit"
      }),
      contact: new FormControl(`${sth.contact}`, {
        updateOn: "submit"
      }),
    //   photo: new FormControl(`${sth.photo}`, {
    //     updateOn: "submit"
    //   }),
      position: new FormControl(`${sth.position}`, {
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
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
                        <img src="${sth.photo}" width="150px" height="150px" style="border-radius:50%" alt="" class="rounded-circle" />
                    </div>
                    <div class="col-sm-6 col-md-7">
                        <h3><strong>${sth.first_name}&nbsp;${sth.last_name}</strong></h3>
                            <br />
                            <h4><i class="icon-envelope"></i><a href="${sth.email}">&nbsp;${sth.email}</a></h4>
                            <h3><i class="icon-phone"></i>&nbsp;${sth.contact}</h3>
                            <h3><i class="icon-home"></i>&nbsp;${sth.address}</h3>
 </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  updateUser(id) {
    this.addUsersForm.value.groups = [Number(this.addUsersForm.value.groups)];
    return this.userService
      .updateUser(id, this.addUsersForm.value)
      .subscribe(data => {
        this.route.navigate(["all-users"]);
      });
  }
  delete(id) {
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log("Data Deleted");
        this.route.navigate(["all-users"]);
      },
      error => {
        console.log(error);
      }
    );
  }
 

}
