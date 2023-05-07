import { Department } from './department.model';
import { Modules } from './modules.model';

export interface Lecturer {
  id: string;
  lecturer_full_name: string;
  lecturer_staff_number: string;
  password: string;
  department: Department;
  modules: Modules[];
}
