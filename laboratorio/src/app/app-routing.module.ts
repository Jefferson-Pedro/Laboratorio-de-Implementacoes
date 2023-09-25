import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard-2/dashboard.component';
import { DashboardMaterialComponent } from './dashboard-material/dashboard-material.component';
import { CalendarComponent } from './calendar-module/components/calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 

  {path: 'home', component: HomeComponent}, 

  {path: 'calendar', component: CalendarComponent},

  {path: 'relatorio', component: DashboardMaterialComponent},

  {path: 'dashboard', component: DashboardComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
