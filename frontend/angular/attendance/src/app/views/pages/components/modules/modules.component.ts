import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Timetable } from 'src/app/model/timetable.model';



import { GET_LECTURER_TIMETABLE } from 'src/app/queries/lecturer.query';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {
  allLecturerTimetable: Timetable[]=[]

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
      ).subscribe();
  }

  // cardSetting = [
  //     {
  //       header: false,
  //       mainTitle: 'Employee',
  //       subTitle: '',
  //       footer: false,
  //       style: 'primary',
  //     },
  //     {
  //       header: false,
  //       mainTitle: 'Robinson',
  //       subTitle: '',
  //       footer: false,
  //       style: 'secondary',
  //     },
  //     {
  //       header: false,
  //       mainTitle: 'Robinson',
  //       subTitle: '',
  //       footer: false,
  //       style: 'secondary',
  //     },
  //   ];
}
