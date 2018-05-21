import { TestBed, inject } from '@angular/core/testing';

import { VacationSpotsService } from './vacation-spots.service';

describe('VacationSpotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacationSpotsService]
    });
  });

  it('should be created', inject([VacationSpotsService], (service: VacationSpotsService) => {
    expect(service).toBeTruthy();
  }));
});
