import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Timetable } from 'src/app/model/timetable.model';
import { GET_LECTURER_TIMETABLE } from 'src/app/queries/lecturer.query';

@Injectable()
export class LecturerService {
  constructor(private apollo: Apollo) {}

  allLecturerTimetable: Timetable[] = [];
  getLecturerTimetable() {
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
}
