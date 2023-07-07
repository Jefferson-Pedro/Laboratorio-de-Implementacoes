import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './fullcalendar/fullcalendar-component/calendar.component';

const routes: Routes = [

  {path: 'calendar', component: CalendarComponent},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
