import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('drawer') drawer: any;

  constructor(private el: ElementRef, private route: Router) {}

  navigateToUpload() {
    this.route.navigate(['/upload']);
  }

  onDrawerOpened() {
    document.body.classList.add('no-scroll');
  }

  onDrawerClosed() {
    document.body.classList.remove('no-scroll');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.drawer.opened && !this.el.nativeElement.contains(event.target)) {
      this.drawer.close();
    }
  }

  closeDrawerOnOutsideClick(event: Event) {
    if (this.drawer.opened) {
      this.drawer.close();
    }
  }
}
