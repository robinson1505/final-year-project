import { Lecturer } from './lecturer.model';
import { Programs } from './programs.model';
import { Timetable } from './timetable.model';

export interface Modules {
  id: string;
  module_name: string;
  module_code: string;
  number_of_students: number;
  program: Programs;
  lecturer: Lecturer;
  timetables: [Timetable];
}
