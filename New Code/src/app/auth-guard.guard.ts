import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LOCAL_KEYS } from './app.constants';
import { Store } from '@ngrx/store';
import { selectUser } from './user-state/user.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      // const data = localStorage.getItem(LOCAL_KEYS.USER_INFO);
      return this.store.select(selectUser).pipe(map((data) => {
        if (data) {
          const user_id = data.id;
          return user_id ? true : false;
        }
        else {
          return false;
        }
      }));

     
    }
    catch {
      return false;
    }
  }

}
