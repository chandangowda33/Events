import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDetailedEventService {
  private uploadUrl =
    'https://eventbackend-2vxm.onrender.com/api/v1/event/getEventByID';

  constructor(private http: HttpClient) {}

  eventDetails: any;

  eventID: any = '667837021a7211e81bb5f50d';

  getEventByID(): Observable<any> {
    console.log('req sent');
    console.log(`${this.uploadUrl}/${this.eventID}`);
    return this.http.get(`${this.uploadUrl}/${this.eventID}`);
  }
}
