import { Component } from '@angular/core';
import { faHourglassStart,faHourglassEnd,faLocationDot} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent {
faHourglassStart = faHourglassStart;
faHourglassEnd = faHourglassEnd;
faLocationDot = faLocationDot;

  constructor() {
  }

  cardSetting = [
    {
      header: true,
      day: 'Friday',
      module: 'Web Development',
      venue:'MPH',
      time:'17:00 - 19:00',
      footer: true,
      style: 'primary',
    },
    {
      header: true,
      day: 'Friday',
      module: 'Research Methodology',
      venue:'Class II',
      time:'17:00 - 19:00',
      footer: true,
      style: 'secondary',
    },
  ];
}
