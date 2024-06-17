import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetEventService {
  private uploadUrl =
    'https://eventbackend-2vxm.onrender.com/api/v1/event/getEvent';

  constructor(private http: HttpClient) {}

  eventDetails: any;

  getEvent(event: string): Observable<any> {
    return this.http.get(`${this.uploadUrl}/${event}`);
  }
}
