import { Modules } from './modules.model';
import { Student } from './student.model';
import { Timetable } from './timetable.model';

enum AttendanceStatus {
  'BAD',
  'SATISFY',
  'GOOD',
  'VERY GOOD',
}
export interface Attendance {
  id: string;
  attendance_code: string;
  attendance_status: AttendanceStatus;
  student: Student;
  module: Modules;
  timetable: Timetable;
}
