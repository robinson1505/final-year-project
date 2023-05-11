import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LoginResult } from '../model/auth.model';
import Login from '../resolvers/lecturer.resolver';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private apollo: Apollo, private router: Router) {
    if (localStorage.getItem('token')) this.isAuthenticated$.next(true);
    else this.isAuthenticated$.next(false);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.isLoggedIn().pipe(
      map((loggedIn) => {
        if (loggedIn) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }

  login(lecturerStaffNumber: string, password: string) {
    this.apollo
      .mutate<LoginResult>({
        mutation: Login,
        variables: { lecturerStaffNumber, password },
      })
      .subscribe((result) => {
        const token = result.data?.login;
        localStorage.setItem('token', JSON.stringify(token));
        this.isAuthenticated$.next(true);
        window.location.href = '/dashboard';
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated$.next(false);
    window.location.href = '/';
  }
  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }
}
