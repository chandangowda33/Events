import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success-tab',
  templateUrl: './success-tab.component.html',
  styleUrls: ['./success-tab.component.css'],
})
export class SuccessTabComponent {
  @Input() message!: string;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
