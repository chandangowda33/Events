import { TestBed } from '@angular/core/testing';

import { GetDetailedEventService } from './get-detailed-event.service';

describe('GetDetailedEventService', () => {
  let service: GetDetailedEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDetailedEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
