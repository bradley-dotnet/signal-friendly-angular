import { Injectable } from '@angular/core';
import { Question, QuestionFactory } from './question-factory.interface';

@Injectable()
export class ColorQuestionFactoryService implements QuestionFactory {
  createQuestion(): Question {
    return {
      question: 'Do you like candy or coookies?',
      answers: [
        { label: 'Cookies', filter: (breeds) => breeds.filter(b => b.darkColor )},
        { label: 'Candy', filter: (breeds) => breeds.filter(b => !b.darkColor )},
      ]
    }
  }
}
