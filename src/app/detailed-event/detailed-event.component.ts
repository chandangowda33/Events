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
  previous: number = -1;
  next: number = +1;
  imageNumbers: number = 0;
  zoom: boolean = false;

  ngOnInit(): void {
    this.getEvent.getEventByID().subscribe((eventResponse: any) => {
      this.eventDetails = eventResponse.eventDetails;
      this.eventResponse = eventResponse.status;
      this.imageNumbers = this.eventDetails.eventImageUrls.length - 1;
      console.log(this.count);
      console.log(this.imageNumbers);
      console.log(this.eventDetails);
    });
  }

  imagesView(action: string) {
    if (action === 'right') {
      if (this.count === this.imageNumbers) {
        this.count = 0;
        this.previous = this.count - 1;
        this.next = this.count + 1;
      } else {
        this.count++;
        this.previous = this.count - 1;
        this.next = this.count + 1;
      }
    } else if (action === 'left') {
      if (this.count === 0) {
        this.count = this.imageNumbers;
        this.previous = this.count - 1;
        this.next = this.count + 1;
      } else {
        this.count--;
        this.previous = this.count - 1;
        this.next = this.count + 1;
      }
    }
  }
  sendMessage(event: any, theme: any) {
    const phoneNumber = '7892306532';
    const message = `Hello, I would like to know more about your ${theme} theme of ${event} event.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
  }

  zoomImg(zoom: boolean) {
    this.zoom = zoom;
    // if (zoom) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = 'auto';
    // }
  }
}
