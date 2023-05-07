import { Programs } from './programs.model';

export interface Department {
  id: string;
  department_name: string;
  department_code: string;
  programs: Programs[];
}
