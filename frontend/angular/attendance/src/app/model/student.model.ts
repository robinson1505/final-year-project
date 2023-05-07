import { Attendance } from './attendandance.model';
import { Enrollment } from './enrollment.model';
import { Programs } from './programs.model';

export interface Student {
  id: string;
  student_full_name: string;
  student_registration_number: string;
  password: string;
  program: Programs;
  enrollments: [Enrollment];
  attendances: [Attendance];
}
