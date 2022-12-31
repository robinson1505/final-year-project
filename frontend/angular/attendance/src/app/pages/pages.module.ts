import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentsComponent } from './components/students/students/students.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ModulesComponent } from './components/modules/modules.component';
import { ModuleStudentsComponent } from './components/students/module-students/module-students.component';

const pageComponents = [
  CardsComponent,
  SessionsComponent,
  StudentsComponent,
  AttendanceComponent,
  ModulesComponent,
  ModuleStudentsComponent,
];

@NgModule({
  declarations: [pageComponents],
  imports: [MaterialModule, CommonModule, SharedModule, FontAwesomeModule,RouterModule],
  exports: [pageComponents],
})
export class PagesModule {}
