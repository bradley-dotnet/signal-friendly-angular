import { TestBed } from '@angular/core/testing';

import { DogDataService } from './dog-data.service';

describe('DogDataService', () => {
  let service: DogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
