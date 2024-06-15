import { Question } from './questions/question-factory.interface';
import { QuizState } from './quiz-state.interface';
import { QuizUpdaterService } from './quiz-updater.service';

describe('QuizUpdaterService', () => {
  let service: QuizUpdaterService;

  beforeEach(() => {
    service = new QuizUpdaterService();
  });

  it('should remove question and filter breeds based on answer', () => {
    const question: Question = {
      question: 'Some Text',
      answers: [
        { label: 'Right answer', filter: (breeds) => breeds.filter(b => !b.longCoat) }
      ]
    }
    const initialState: QuizState = {
      questions: [question],
      breeds: [
        {
          "name": "Newfoundland",
          "apiName": "newfoundland",
          "flopEar": true,
          "highEnergy": false,
          "longCoat": true,
          "darkColor": true
      },
      {
          "name": "Dachshund",
          "apiName": "dachshund",
          "flopEar": true,
          "highEnergy": false,
          "longCoat": false,
          "darkColor": true
      },
      ]
    }
    const updatedState = service.updateQuiz(initialState, question, question.answers[0]);

    expect(updatedState.questions.length).toBe(0);
    expect(updatedState.breeds).toEqual([initialState.breeds[1]]);
  });
});
