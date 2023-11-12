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
    this.listEvents(); 

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
    events: [  { title: 'event 1', date: '2023-11-01' , eventColor: '#378006'}]
  };

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  handleDateClick(arg) {
    console.log('Argumento:',arg);
    //alert('Clicado! ' + arg.dateStr + arg);
    const dialogRef = this.dialog.open(CadastroEventoComponent, {
      width: '45%'
    });
  }

  public listEvents(){

    this.service.list().subscribe({
      next: (res: any[]) => {
        console.log('Resposta do servidor:',res);

        // Mapeia os objetos Reminder para o formato esperado pelo FullCalendar
        const events = res.map((reminder) => ({
          id: reminder.idReminder,
          title: reminder.titulo,
          description: reminder.descricao,
          start: new Date(reminder.dataEvento), // Converte a data para o formato apropriado
          backgroundColor: reminder.categoria, // A cor de fundo do evento é baseada na categoria
        }));

        this.calendarOptions.events = events;
      }, 
      error: (err: any)=> {
          console.log('Vixe, deu ruim!');
      },
    });
  }
}
