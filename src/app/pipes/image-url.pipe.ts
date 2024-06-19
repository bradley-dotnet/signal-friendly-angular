import { Pipe, PipeTransform } from '@angular/core';
import { DogImageService } from '../services/dog-image.service';
import { Breed } from '../model/breed.interface';
import { Observable } from 'rxjs';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {
  constructor(private imageApi: DogImageService) {
  }

  transform(value: Pick<Breed, 'apiName'>): Observable<string> {
    return this.imageApi.getImageUrl(value);
  }

}
