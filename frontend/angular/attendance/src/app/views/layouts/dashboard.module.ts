import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [DashboardComponent],
  
  imports: [CommonModule, RouterModule,MaterialModule, SharedModule, PagesModule],
})
export class DashboardModule {}
