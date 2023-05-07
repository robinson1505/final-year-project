import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleStudentsComponent } from './views/pages/components/students/module-students/module-students.component';
import { StudentsComponent } from './views/pages/components/students/students/students.component';
import { ModulesComponent } from './views/pages/components/modules/modules.component';
import { DashboardComponent } from './views/layouts/dashboard/dashboard.component';
import { SessionsComponent } from './views/pages/components/sessions/sessions.component';
import { AttendanceComponent } from './views/pages/components/attendance/attendance.component';
import { LoginComponent } from './views/pages/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: SessionsComponent },
      { path: 'module', component: ModulesComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'moduleStudent', component: ModuleStudentsComponent },
      { path: 'attendance', component: AttendanceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
