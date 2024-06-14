import { Breed } from '../../model/breed.interface';
import { CoatQuestionFactoryService } from './coat-question-factory.service';

describe('CoatQuestionFactoryService', () => {
  let dogs: Breed[] = [
    {
      "name": "Pomeranian",
      "apiName": "pomeranian",
      "flopEar": false,
      "highEnergy": true,
      "longCoat": true,
      "darkColor": false
    },
    {
      "name": "Basset Hound",
      "apiName": "hound,basset",
      "flopEar": true,
      "highEnergy": false,
      "longCoat": false,
      "darkColor": false
    }
  ]
  let service: CoatQuestionFactoryService;

  beforeEach(() => {
    service = new CoatQuestionFactoryService();
  });

  it('should filter out long coats for non-groomers', () => {
    const question = service.createQuestion();
    const filtered = question.answers[1].filter(dogs);
    
    expect(filtered).toEqual([dogs[1]]);
  });

  
  it('should filter out short coats for groomers', () => {
    const question = service.createQuestion();
    const filtered = question.answers[0].filter(dogs);
    
    expect(filtered).toEqual([dogs[0]]);
  });
});
