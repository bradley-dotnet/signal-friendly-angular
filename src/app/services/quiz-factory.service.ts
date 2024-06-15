import { Inject, Injectable } from '@angular/core';
import { Question, QuestionFactory } from './questions/question-factory.interface';

@Injectable()
export class QuizFactoryService {

  // inject function lacks good multi-provider support
  constructor(@Inject(QuestionFactory)private factories: QuestionFactory[]) { }

  public createQuiz(): Question[] {
    const deck = this.factories.map(f => f.createQuestion());
    const quiz: Question[] = [];
    
    while (deck.length) {
      const draw = Math.random() % deck.length;
      quiz.push(...deck.splice(draw, 1));
    }

    return quiz;
  }
}
