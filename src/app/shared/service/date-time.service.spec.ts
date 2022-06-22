import { TestBed } from '@angular/core/testing';

import { DateTimeService } from './date-time.service';

describe('DateTimeService', () => {
  let service: DateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud return night if we are in the night', () => {
    expect(service.getDayMoment(new Date("July 21, 1983 01:15:00"))).toEqual('Night');
  });

});
