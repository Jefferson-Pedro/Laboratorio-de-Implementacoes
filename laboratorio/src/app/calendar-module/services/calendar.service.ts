import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Reminder } from '../model/Reminder';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  apiUrl = 'http://localhost:3000/events';
  
  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  public list() {
    //const url = `${environment.baseUrl}/reminder/all`;
    const url = this.apiUrl;

    return this.http.get<Reminder[]>(url).pipe(first());
  }

  read(): Observable<Event[]>{
    return this.http.get<Event[]>(this.apiUrl);
  }
  
  
}
