import { Modules } from './modules.model';
import { Student } from './student.model';

export interface Enrollment {
  id: string;
  semester: number;
  academic_year: string;
  student: Student;
  module: Modules;
}
