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

 }
