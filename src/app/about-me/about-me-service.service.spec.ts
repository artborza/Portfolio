import { TestBed } from '@angular/core/testing';

import { AboutMeServiceService } from './about-me-service.service';

describe('AboutMeServiceService', () => {
  let service: AboutMeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutMeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
