import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Question } from '../services/questions/question-factory.interface';
import { QuizStore } from '../services/quiz.store';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  styles: `
    mat-card-content {
      margin-top: 0.5rem;
      display: flex;
      column-gap: 1rem;
    }
  `,
  template: `
  <mat-card>
    <mat-card-header>
        <mat-card-title>{{question().question}}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
        @for(answer of question().answers; track answer) {
            <button mat-raised-button color="primary" (click)="store.handleAnswer(question(), answer)">{{answer.label}}</button>
        }
    </mat-card-content>
  </mat-card>
  `
})
export class QuestionComponent {
  public question = input.required<Question>();
  public store = inject(QuizStore);
}
