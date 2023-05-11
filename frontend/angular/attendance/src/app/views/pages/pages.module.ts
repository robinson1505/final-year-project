import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material/material.module'
import {LecturerService }from '../../services/lecturer.service'
import { CardsComponent } from './components/cards/cards.component';
;
import { SharedModule } from './../shared/shared.module';
import { SessionsComponent } from './components/sessions/sessions.component';
import { StudentsComponent } from './components/students/students/students.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ModulesComponent } from './components/modules/modules.component';
import { LoginComponent } from './components/login/login.component';
import { ModuleStudentsComponent } from './components/students/module-students/module-students.component';


const pageComponents = [
  CardsComponent,
  SessionsComponent,
  StudentsComponent,
  AttendanceComponent,
  ModulesComponent,
  ModuleStudentsComponent,
  LoginComponent,
];

@NgModule({
  declarations: [pageComponents,],
  imports: [MaterialModule, CommonModule, SharedModule, FontAwesomeModule,RouterModule,FormsModule],
  exports: [pageComponents],
  providers:[LecturerService]
})
export class PagesModule {}
