import { Component } from '@angular/core';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  sideBarOpen = true;
  constructor() {

  }


  sideBarTogger() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
