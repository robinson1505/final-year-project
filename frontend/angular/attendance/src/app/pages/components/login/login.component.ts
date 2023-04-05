import { Component } from '@angular/core';
import { faUser,faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faUser=faUser;
  faEye =faEye;

}
