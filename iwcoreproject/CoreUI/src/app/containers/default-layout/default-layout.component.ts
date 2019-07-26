import { Component, OnDestroy, Inject } from '@angular/core';
import { navItems } from '../../_nav';
import {AuthService} from '../../_services/auth.service'
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',

  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  
  constructor(public router:Router, public auth:AuthService, public route:ActivatedRoute) {}

 logout(){
    this.auth.removeToken();
    if(!this.auth.getToken()){
        this.router.navigate(['login'])
    }
  }

  ngOnDestroy(): void {
    
  }
}

  

