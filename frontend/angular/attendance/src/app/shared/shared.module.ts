import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouterModule } from '@angular/router';

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  ToolbarComponent,
  CardsComponent,
];

@NgModule({
  declarations: [
    sharedComponents
  ],
  imports: [CommonModule, MaterialModule,RouterModule],
  exports:[sharedComponents]
})
export class SharedModule {}
