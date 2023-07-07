import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';


import { CalendarComponent } from './fullcalendar-component/calendar.component';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FullCalendarModule
  ]
})
export class FullcalendarModule { }
