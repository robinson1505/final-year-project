import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  descriptions=[
    {title: 'module', Rate: '200', image:'../../../../assets/images/module.webp',bgcolor:'#DCE2E5', link:'module'},
    {title: 'students', Rate: '5' ,image:'../../../../assets/images/students.webp', bgcolor:'#C2D3EB', link:'student'},
    {title: 'programs', Rate: '10', image:'../../../../assets/images/program.webp', bgcolor:'#EBEBEB' ,link:'moduleStudent'},

  ]
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
