import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTabComponent } from './success-tab.component';

describe('SuccessTabComponent', () => {
  let component: SuccessTabComponent;
  let fixture: ComponentFixture<SuccessTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessTabComponent]
    });
    fixture = TestBed.createComponent(SuccessTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
