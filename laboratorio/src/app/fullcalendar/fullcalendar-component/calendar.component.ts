import { Observable } from 'rxjs';
import { Component, ViewChild, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';



import { CalendarService } from './calendar.service';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private service:CalendarService){}

  ngOnInit(): void {
    this.service.read().subscribe(
      (events) => {
        console.log("Carregando dados!");
        console.log(events);
        this.calendarOptions.events = events;
     });   
  }

  calendarOptions: CalendarOptions = {
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
    alert('Clicado! ' + arg.dateStr + arg);
  }
}
