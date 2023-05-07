import { Component } from '@angular/core';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {

  userList: any[] = [
    {
      program: 'BIT',
      module: 'Operating System',
      no_of_students: 50,
      attendance_status: 'Very Good',
      date: '2022-12-30',
    },
    {
      program: 'BIT',
      module: 'Operating System',
      no_of_students: 50,
      attendance_status: 'Very Good',
      date: '2022-12-30',
    },
    {
      program: 'BIT',
      module: 'Operating System',
      no_of_students: 50,
      attendance_status: 'Very Good',
      date: '2022-12-30',
    },
    {
      program: 'BIT',
      module: 'Operating System',
      no_of_students: 50,
      attendance_status: 'Very Good',
      date: '2022-12-30',
    },
  ];
  headArray = [
    { Head: 'Program', FieldName: 'program' },
    { Head: 'Module', FieldName: 'module' },
    { Head: 'No of Student ', FieldName: 'no_of_students' },
    { Head: 'Attendance Status', FieldName: 'attendance_status' },
    { Head: 'Date', FieldName: 'date' },
    { Head: 'Action', FieldName: '' },
  ];
}
