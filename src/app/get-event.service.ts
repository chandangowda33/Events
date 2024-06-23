import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetEventService {
  private uploadUrl =
    'https://eventbackend-2vxm.onrender.com/api/v1/event/getEventByTheme';

  constructor(private http: HttpClient) {}

  eventDetails: any;
  eventName: string = '';

  getEvent(): Observable<any> {
    console.log('req sent');
    console.log(`${this.uploadUrl}/${this.eventName}`);
    return this.http.get(`${this.uploadUrl}/${this.eventName}`);
  }

  setEventDetails(eventResponse: any) {
    this.eventDetails = eventResponse.eventDetails;
  }

  setEventName(eventname: string) {
    this.eventName = eventname;
  }

  getEventName() {
    return this.eventName;
  }
  getEventDetails() {
    return this.eventDetails;
  }
}
