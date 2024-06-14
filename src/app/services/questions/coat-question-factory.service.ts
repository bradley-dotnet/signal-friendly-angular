import { Injectable } from '@angular/core';
import { Question, QuestionFactory } from './question-factory.interface';

@Injectable()
export class CoatQuestionFactoryService implements QuestionFactory {
  createQuestion(): Question {
    return {
      question: 'How long does it take you to get ready in the morning?',
      answers: [
        { label: 'More than 15 minutes', filter: (breeds) => breeds.filter(b => b.longCoat )},
        { label: 'Less than 15 minutes', filter: (breeds) => breeds.filter(b => !b.longCoat )},
      ]
    }
  }
}
