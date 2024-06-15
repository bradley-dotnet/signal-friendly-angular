import { Component, input } from '@angular/core';
import { Question } from '../services/questions/question-factory.interface';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  public question = input.required<Question>();
}
