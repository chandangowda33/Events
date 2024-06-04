import { Component } from '@angular/core';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.css'],
})
export class TrustComponent {
  flag: Number = 1;

  onClick(event: MouseEvent, flagNo: Number): void {
    if (this.flag === flagNo) this.flag = 0;
    else this.flag = flagNo;
  }
}
