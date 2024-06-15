import { Component, input } from '@angular/core';
import { Breed } from '../model/breed.interface';

@Component({
  selector: 'app-result',
  standalone: true,
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  public winner = input.required<Breed>();
}
