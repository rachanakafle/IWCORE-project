import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";
import { from } from "rxjs";
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, public router:Router, public route: ActivatedRoute) {
      if(localStorage.getItem('token')){
        this.router.navigate(['dashboard'],{relativeTo:this.route.parent})
      }
  }

  ngOnInit() {}
  onLogin(): void {
    console.log(this.username, this.password);
    this.authService.loginUser(this.username, this.password).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("token", response.token);
        if(response.token){
        this.router.navigate(['dashboard'],{relativeTo:this.route.parent})
        }
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
