import { Injectable } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { LoginResult } from '../model/auth.model';
import Login from '../resolvers/lecturer.resolver';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private apollo: Apollo) {
    if (localStorage.getItem('token')) this.isAuthenticated.next(true);
    else this.isAuthenticated.next(false);
  }

  login(lecturerStaffNumber: string, password: string) {
    this.apollo
      .mutate<LoginResult>({
        mutation: Login,
        variables: { lecturerStaffNumber, password },
      })
      .subscribe((result) => {
        // console.log('This is my payload: ', result.data?.login);
        const token = result.data?.login;
        localStorage.setItem('token', JSON.stringify(token));
        // console.log('this is the token', token);
        // console.log("Json: ",JSON.stringify(token))
        this.isAuthenticated.next(true);
        window.location.href = '/dashboard';
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
    window.location.href = '/';
  }
}
