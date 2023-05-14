import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';
import { Timetable } from 'src/app/model/timetable.model';
import { GET_LECTURER_TIMETABLE } from 'src/app/queries/lecturer.query';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  allLecturerTimetable: Timetable[] = [];

  constructor(private apollo: Apollo) {}
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
      )
      .subscribe();
  }

  navigate(){
    window.location.href = '/dashboard';
  }
}
