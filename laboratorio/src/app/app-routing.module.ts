import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 

  {path: 'home', component: HomeComponent},

  {path: 'calendar', component: CalendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
