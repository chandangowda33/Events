import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDetailedEventService } from '../get-detailed-event.service';

@Component({
  selector: 'app-detailed-event',
  templateUrl: './detailed-event.component.html',
  styleUrls: ['./detailed-event.component.css'],
})
export class DetailedEventComponent implements OnInit {
  constructor(private getEvent: GetDetailedEventService) {}
  eventDetails: any;
  eventResponse: any;
  count: number = 0;
  imageNumbers: number = 0;

  ngOnInit(): void {
    this.getEvent.getEventByID().subscribe((eventResponse: any) => {
      this.eventDetails = eventResponse.eventDetails;
      this.eventResponse = eventResponse.status;
      this.imageNumbers = this.eventDetails.eventImageUrls.length - 1;
      console.log(this.eventDetails);
    });
  }

  imagesView(action: string) {
    if (action === 'right') {
      this.count++;
    } else if (action === 'left') {
      this.count--;
    }
  }
}
