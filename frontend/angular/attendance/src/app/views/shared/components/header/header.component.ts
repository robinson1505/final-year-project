import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleSideBar(): void {
    this.toggleSideBarForMe.emit();
  }
}
