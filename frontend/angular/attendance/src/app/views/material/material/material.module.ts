import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
