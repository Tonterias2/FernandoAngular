// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { DataTablesModule } from 'angular-datatables';
import { BodyModule } from './components/body/body.module';
// import { DashboardModule } from './components/dashboard/dashboard.module';
// ROUTES
import { APP_ROUTES } from './app.routes';
// SERVICES

// COMPONENTS
import { AppComponent } from './app.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BodyModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
