import { Component, inject } from '@angular/core';
import { QuestionFactory } from '../services/questions/question-factory.interface';
import { CoatQuestionFactoryService } from '../services/questions/coat-question-factory.service';
import { ColorQuestionFactoryService } from '../services/questions/color-question-factory.service';
import { EarQuestionFactoryService } from '../services/questions/ear-question-factory.service';
import { EnergyQuestionFactoryService } from '../services/questions/energy-question-factory.service';
import { QuizStore } from '../services/quiz.store';
import { QuizFactoryService } from '../services/quiz-factory.service';
import { QuestionComponent } from '../question/question.component';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  standalone: true,
  imports: [QuestionComponent, ResultComponent],
  providers: [
    QuizStore,
    QuizFactoryService,
    { provide: QuestionFactory, useClass: CoatQuestionFactoryService, multi: true },
    { provide: QuestionFactory, useClass: ColorQuestionFactoryService, multi: true },
    { provide: QuestionFactory, useClass: EarQuestionFactoryService, multi: true },
    { provide: QuestionFactory, useClass: EnergyQuestionFactoryService, multi: true },
  ]
})
export class QuizComponent {
  public store = inject(QuizStore);
}
