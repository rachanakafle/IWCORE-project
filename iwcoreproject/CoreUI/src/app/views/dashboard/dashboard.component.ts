import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { UserService } from "../../_services/user.service";
import { AuthService } from "../../_services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  constructor(
    public user: UserService,
    public router: Router,
    public auth: AuthService,
    public route: ActivatedRoute
  ) {}
  users: any = null;
  count: any[]=[];
  show() {
    this.user.getUser().subscribe(data => (this.users = data));
  }

  //dashboard ma counter ko part dekhauna lai
  ngOnInit(){
    this.user.getCount().subscribe(
        data => {
            console.log(data);
           this.count = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
