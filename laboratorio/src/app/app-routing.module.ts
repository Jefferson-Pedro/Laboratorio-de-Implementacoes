import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard-2/dashboard.component';
import { DashboardMaterialComponent } from './dashboard-material/dashboard-material.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 

  {path: 'home', component: HomeComponent},

  {path: 'calendar', component: CalendarComponent},

  {path: 'relatorio', component: DashboardMaterialComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
