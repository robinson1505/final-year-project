import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import GET_VENUES from '../../../../services/venue.services';
import { Venue } from '../../../../model/venue.model';
import {
  faHourglassStart,
  faHourglassEnd,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {
  faHourglassStart = faHourglassStart;
  faHourglassEnd = faHourglassEnd;
  faLocationDot = faLocationDot;
  allVenues: Venue[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({ query: GET_VENUES })
      .valueChanges.subscribe(({ data, loading }) => {
        if (loading === true) {
          console.log('loading.........................');
        } else {
          this.allVenues = data.getAllVenues;
        }
      });
  }

  cardSetting = [
    {
      header: true,
      day: 'Friday',
      module: 'Web Development',
      venue: 'MPH',
      time: '17:00 - 19:00',
      footer: true,
      style: 'primary',
    },
    {
      header: true,
      day: 'Friday',
      module: 'Research Methodology',
      venue: 'Class II',
      time: '17:00 - 19:00',
      footer: true,
      style: 'secondary',
    },
  ];
}
