import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table.component';

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  ToolbarComponent,
  CardComponent,
  TableComponent,
];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, MaterialModule, RouterModule, FontAwesomeModule],
  exports: [sharedComponents],
})
export class SharedModule {}
