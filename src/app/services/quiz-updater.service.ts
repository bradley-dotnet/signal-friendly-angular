import { Injectable } from '@angular/core';
import { QuizState } from './quiz-state.interface';
import { Answer, Question } from './questions/question-factory.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizUpdaterService {

  public updateQuiz(state: QuizState, question: Question, answer: Answer): QuizState {
    const questionIndex = state.questions.indexOf(question);
    const updatedQuestions = [...state.questions];
    updatedQuestions.splice(questionIndex, 1);
    return {
      questions: updatedQuestions,
      breeds: answer.filter(state.breeds)
    };
  }
}
