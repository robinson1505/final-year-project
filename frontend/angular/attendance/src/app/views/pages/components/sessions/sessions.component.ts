import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  faHourglassStart,
  faHourglassEnd,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { Timetable } from 'src/app/model/timetable.model';
import { GET_LECTURER_TIMETABLE } from 'src/app/queries/lecturer.query';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {
  faHourglassStart = faHourglassStart;
  faHourglassEnd = faHourglassEnd;
  faLocationDot = faLocationDot;


  constructor(private apollo: Apollo) {}
  allLecturerTimetable: Timetable[]=[];
  panelOpenState = false;
  ngOnInit(): void {
    this.apollo
      .watchQuery<{ getLecturerTimetable: Timetable[] }>({
        query: GET_LECTURER_TIMETABLE,
      })
      .valueChanges.pipe(
        map((result) => {
          console.log('Result:  ', result);
          this.allLecturerTimetable = result.data.getLecturerTimetable;
        })
      ).subscribe();
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


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
