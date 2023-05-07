import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { faPenToSquare, faXmark, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  contentTemplate !: TemplateRef<any>;
  @Input() cardSetting: any;
  isOpen: boolean;
  faPenToSquare = faPenToSquare;
  faXmark = faXmark;
  

  constructor() {
    this.isOpen = false;
  }
  ngOnInit(): void {}
  openhide() {
    this.isOpen = !this.isOpen;
  }
}
