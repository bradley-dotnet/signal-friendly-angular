import { Injectable } from '@angular/core';
import { Question, QuestionFactory } from './question-factory.interface';

@Injectable()
export class EarQuestionFactoryService implements QuestionFactory {
  createQuestion(): Question {
    return {
      question: 'Are you flexible or rigid?',
      answers: [
        { label: 'Flexible', filter: (breeds) => breeds.filter(b => b.flopEar )},
        { label: 'Rigid', filter: (breeds) => breeds.filter(b => !b.flopEar )},
      ]
    }
  }
}
