import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [QuizComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signal-friendly';
}
