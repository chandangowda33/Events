import { Component } from '@angular/core';
import { GetEventService } from '../get-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private geteventservice: GetEventService) {}
}
