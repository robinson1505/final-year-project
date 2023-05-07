import { Component } from '@angular/core';
// import { Apollo } from 'apollo-angular';
import { AuthService } from 'src/app/services/lecturer.service';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  faUser = faUser;
  faEye = faEye;
   lecturerStaffNumber: string = '';
  password: string = '';
  constructor(private authService:AuthService) {}

  onSubmit() {
    this.authService.login(this.lecturerStaffNumber, this.password);
  }


}
