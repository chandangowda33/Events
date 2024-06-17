import { Component } from '@angular/core';
import { GetEventService } from 'src/app/get-event.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private getEventService: GetEventService) {}

  getEvent(eventName: string) {
    this.getEventService.getEvent(eventName).subscribe((eventDetails: any) => {
      console.log(eventDetails);
    });
  }
}
