import { TestBed, inject } from '@angular/core/testing';

import { SwAPIDataService } from './sw-apidata.service';

describe('SwAPIDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwAPIDataService]
    });
  });

  it('should be created', inject([SwAPIDataService], (service: SwAPIDataService) => {
    expect(service).toBeTruthy();
  }));
});
