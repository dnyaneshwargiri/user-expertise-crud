import { Component, OnInit } from '@angular/core';

import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LOCAL_KEYS } from '../app.constants';
import { Store } from '@ngrx/store';
import { removeUser } from '../user-state/user.action';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showHeader = false;
  ifAdmin = false;
  constructor( private router: Router, private store:Store) {
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.showHeader = event.urlAfterRedirects === '/app-login' || event.urlAfterRedirects === '/app-add-expertise' ||
                        event.urlAfterRedirects === '/app-user-registration' ? false : true;

      if(localStorage.getItem("user_type")=="admin"){
        this.ifAdmin==true;
      }
      else{
        this.ifAdmin=false;
      }
                    
    });
  }

  ngOnInit(): void {
  }

  logout(){
    // localStorage.removeItem(LOCAL_KEYS.USER_INFO);
    this.store.dispatch(removeUser());
    this.router.navigate(['app-login']);
  }
}
