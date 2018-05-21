import { TestBed, inject } from '@angular/core/testing';

import { DavesDataService } from './daves-data.service';

describe('DavesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DavesDataService]
    });
  });

  it('should be created', inject([DavesDataService], (service: DavesDataService) => {
    expect(service).toBeTruthy();
  }));
});
