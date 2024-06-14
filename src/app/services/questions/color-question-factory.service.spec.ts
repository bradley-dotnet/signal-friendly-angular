import { Breed } from '../../model/breed.interface';
import { ColorQuestionFactoryService } from './color-question-factory.service';

describe('ColorQuestionFactoryService', () => {
  let dogs: Breed[] = [
    {
      "name": "English Bulldog",
      "apiName": "bulldog,english",
      "flopEar": false,
      "highEnergy": false,
      "longCoat": false,
      "darkColor": false
    },
      {
        "name": "Dachshund",
        "apiName": "dachshund",
        "flopEar": true,
        "highEnergy": false,
        "longCoat": false,
        "darkColor": true
    }
  ]
  let service: ColorQuestionFactoryService;

  beforeEach(() => {
    service = new ColorQuestionFactoryService();
  });

  it('should filter out light coats for cookie lovers', () => {
    const question = service.createQuestion();
    const filtered = question.answers[0].filter(dogs);
    
    expect(filtered).toEqual([dogs[1]]);
  });

  
  it('should filter out dark coats for candy lovers', () => {
    const question = service.createQuestion();
    const filtered = question.answers[1].filter(dogs);
    
    expect(filtered).toEqual([dogs[0]]);
  });
});
