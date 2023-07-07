import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FullcalendarComponent } from './fullcalendar.component';



@NgModule({
  declarations: [
    FullcalendarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class FullcalendarModule { }
