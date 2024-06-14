import { Injectable } from '@angular/core';
import { Question, QuestionFactory } from './question-factory.interface';

@Injectable()
export class EnergyQuestionFactoryService implements QuestionFactory {
  createQuestion(): Question {
    return {
      question: 'Would you rather run a marathon or take a nap?',
      answers: [
        { label: 'Run a marathon', filter: (breeds) => breeds.filter(b => b.highEnergy )},
        { label: 'Take a nap', filter: (breeds) => breeds.filter(b => !b.highEnergy )},
      ]
    }
  }
}
