import { TestBed } from '@angular/core/testing';

import { QuizFactoryService } from './quiz-factory.service';

describe('QuizFactoryService', () => {
  let service: QuizFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
