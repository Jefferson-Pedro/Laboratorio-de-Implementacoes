import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatToolbarModule,
    FullCalendarModule,
    HttpClientModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
