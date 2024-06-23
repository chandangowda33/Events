import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEventComponent } from './detailed-event.component';

describe('DetailedEventComponent', () => {
  let component: DetailedEventComponent;
  let fixture: ComponentFixture<DetailedEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedEventComponent]
    });
    fixture = TestBed.createComponent(DetailedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
