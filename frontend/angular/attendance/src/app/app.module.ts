import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './views/layouts/dashboard.module';
import { GraphQLModule } from './services/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/lecturer.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    GraphQLModule,
    HttpClientModule,

  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
