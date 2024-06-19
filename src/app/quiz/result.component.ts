import { Component, input } from '@angular/core';
import { Breed } from '../model/breed.interface';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { ImageUrlPipe } from '../pipes/image-url.pipe';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, ImageUrlPipe],
  template: `
  <mat-card>
    <mat-card-header>
      <h2>You are a {{winner().name}}</h2>
    </mat-card-header>
    <mat-card-content>
      <img mat-card-image [src]="winner() | imageUrl | async"/>
    </mat-card-content>
  </mat-card>
  `
})
export class ResultComponent {
  public winner = input.required<Breed>();
}
