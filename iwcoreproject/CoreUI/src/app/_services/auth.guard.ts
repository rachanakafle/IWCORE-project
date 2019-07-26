import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor( private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
        if (localStorage.getItem('token')){
            return true;
        }else{
            this.router.navigate(['/login'],{
                queryParams:{
                    return: state.url
                }
            });
        
    return false;
        }
  }
  
}
