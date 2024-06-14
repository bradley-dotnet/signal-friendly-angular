import { Breed } from '../../model/breed.interface';
import { EnergyQuestionFactoryService } from './energy-question-factory.service';

describe('EnergyQuestionFactoryService', () => {
  let dogs: Breed[] = [
    {
      "name": "Golden Retriever",
      "apiName": "retriever,golden",
      "flopEar": true,
      "highEnergy": true,
      "longCoat": true,
      "darkColor": false
    },
    {
        "name": "Pekinese",
        "apiName": "pekinese",
        "flopEar": true,
        "highEnergy": false,
        "longCoat": true,
        "darkColor": false
    }
  ]
  let service: EnergyQuestionFactoryService;

  beforeEach(() => {
    service = new EnergyQuestionFactoryService();
  });

  it('should filter out low energy dogs for runners', () => {
    const question = service.createQuestion();
    const filtered = question.answers[0].filter(dogs);
    
    expect(filtered).toEqual([dogs[0]]);
  });

  
  it('should filter out high energy dogs for couch potatoes', () => {
    const question = service.createQuestion();
    const filtered = question.answers[1].filter(dogs);
    
    expect(filtered).toEqual([dogs[1]]);
  });
});
