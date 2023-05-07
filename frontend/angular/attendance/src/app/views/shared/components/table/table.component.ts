import { Component, Input, } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  faEye = faEye


  @Input() HeadArray: any[] = [];
  @Input() GridList: any[] = [];



  constructor() {}
}
