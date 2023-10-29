import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CadastroEventoComponent } from './dialog/cadastro-evento/cadastro-evento.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    CalendarComponent,
    CadastroEventoComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatToolbarModule,
    FullCalendarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
