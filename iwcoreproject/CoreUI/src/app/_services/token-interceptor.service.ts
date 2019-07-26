import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "../_services/auth.service";
@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(req, next) {
    if(this.auth.getToken()){
    let actualToken = this.auth.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Token ${actualToken}`
      }
    });
}
    return next.handle(req);
  }
}
