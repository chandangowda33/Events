import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTabComponent } from './error-tab.component';

describe('ErrorTabComponent', () => {
  let component: ErrorTabComponent;
  let fixture: ComponentFixture<ErrorTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorTabComponent]
    });
    fixture = TestBed.createComponent(ErrorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
