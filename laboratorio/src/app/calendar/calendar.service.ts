import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  baseUrl = 'http://localhost:3000/events';

  constructor( private http: HttpClient) {}

  read(): Observable<Event[]>{
    return this.http.get<Event[]>(this.baseUrl);
  }
}
