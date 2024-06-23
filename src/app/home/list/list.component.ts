import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GetEventService } from 'src/app/get-event.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(
    private getEventService: GetEventService,
    private route: Router
  ) {}

  getEvent(eventName: string) {
    this.getEventService.setEventName(eventName);
    this.route.navigate(['/eventTheme']);
  }
}
