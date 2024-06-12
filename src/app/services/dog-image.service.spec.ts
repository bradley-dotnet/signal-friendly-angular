import { TestBed } from '@angular/core/testing';

import { DogImageService } from './dog-image.service';

describe('DogImageService', () => {
  let service: DogImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
