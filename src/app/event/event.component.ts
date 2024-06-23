import { Component, OnInit } from '@angular/core';
import { GetEventService } from '../get-event.service';
import { Router } from '@angular/router';
import { GetDetailedEventService } from '../get-detailed-event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  eventDetails: any = null;
  eventName: string = '';
  getEventService: any;
  eventResponse: string = '';

  constructor(
    private eventDetailsService: GetEventService,
    private route: Router,
    private getDetailedEvent: GetDetailedEventService
  ) {}

  ngOnInit(): void {
    this.eventName = this.eventDetailsService.getEventName().toUpperCase();
    this.eventDetailsService.getEvent().subscribe((eventResponse: any) => {
      this.eventDetails = eventResponse.eventDetails;
      this.eventResponse = eventResponse.status;
    });
  }

  gotoEvent(eventID: any) {
    this.getDetailedEvent.eventID = eventID;
    this.route.navigate(['/detailedTheme']);
  }
}
