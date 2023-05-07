import { Component } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent {
cardSetting = [
    {
      header: false,
      mainTitle: 'Employee',
      subTitle: '',
      footer: false,
      style: 'primary',
    },
    {
      header: false,
      mainTitle: 'Robinson',
      subTitle: '',
      footer: false,
      style: 'secondary',
    },
    {
      header: false,
      mainTitle: 'Robinson',
      subTitle: '',
      footer: false,
      style: 'secondary',
    },
  ];
}
