import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { MainHeaderComponent } from './main-header/main-header.component';


@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    MainHeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
