import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-tab',
  templateUrl: './error-tab.component.html',
  styleUrls: ['./error-tab.component.css'],
})
export class ErrorTabComponent {
  @Input() message!: string;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
