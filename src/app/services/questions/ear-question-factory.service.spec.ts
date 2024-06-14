import { Breed } from '../../model/breed.interface';
import { EarQuestionFactoryService } from './ear-question-factory.service';

describe('EarQuestionFactoryService', () => {
  let dogs: Breed[] = [
    {
      "name": "American Eskimo",
      "apiName": "eskimo",
      "flopEar": false,
      "highEnergy": false,
      "longCoat": true,
      "darkColor": false
    },
    {
        "name": "Black & Tan Coonhound",
        "apiName": "coonhound",
        "flopEar": true,
        "highEnergy": true,
        "longCoat": false,
        "darkColor": true
    }
  ]
  let service: EarQuestionFactoryService;

  beforeEach(() => {
    service = new EarQuestionFactoryService();
  });

  it('should filter out point ears for flexible people', () => {
    const question = service.createQuestion();
    const filtered = question.answers[0].filter(dogs);
    
    expect(filtered).toEqual([dogs[1]]);
  });

  
  it('should filter out flop ears for rigid people', () => {
    const question = service.createQuestion();
    const filtered = question.answers[1].filter(dogs);
    
    expect(filtered).toEqual([dogs[0]]);
  });
});
