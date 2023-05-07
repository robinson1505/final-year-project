import { Department } from './department.model';
import { Modules } from './modules.model';
import { Student } from './student.model';

export interface Programs {
  id: string;
  program_code: string;
  program_name: string;
  nta_level: string;
  department: Department;
  students: [Student];
  modules: [Modules];
  
}
