import { Component, ViewChild, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarService } from '../../services/calendar.service';
import { MatDialog } from '@angular/material/dialog';
import { CadastroEventoComponent } from '../../dialog/cadastro-evento/cadastro-evento.component';
import { Reminder } from '../../model/Reminder';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  reminder: Reminder[];

  constructor(private service:CalendarService,
              private dialog: MatDialog){}

  ngOnInit(): void {
    // this.service.read().subscribe(
    //   (events) => {
    //     console.log("Carregando dados!");
    //     console.log(events);
    //     this.calendarOptions.events = events;
    //  });   
    this.listReal();

  }

  calendarOptions: CalendarOptions = {
    themeSystem: 'standard',
    initialView: 'dayGridMonth',
    locale: ptLocale,
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, ],
    headerToolbar: {
      left:'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prev,next today'
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,

    dateClick: this.handleDateClick.bind(this),
    events: []
  };

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  handleDateClick(arg) {
    console.log('Argumento:',arg);
    //alert('Clicado! ' + arg.dateStr + arg);
    const dialogRef = this.dialog.open(CadastroEventoComponent);
  }

  public listReal(){

    this.service.list().subscribe({
      next: (res: any) => {
        console.log('Resposta do servidor:',res)
        this.calendarOptions.events = res;
      }, 
      error: (err: any)=> {
          console.log('Vixe, deu ruim!');
      },
    });
  }
}
