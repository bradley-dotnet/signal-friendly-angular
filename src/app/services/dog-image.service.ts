import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breed } from '../model/breed.interface';
import { Observable, map } from 'rxjs';

interface RandomImageResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogImageService {

  constructor(private http: HttpClient) { }

  public getImageUrl(breed: Pick<Breed, 'apiName'>): Observable<string> {
    const breedUrl = `https://https://dog.ceo/api/breed/${breed.apiName.replace('.', '/')}/images/random`;
    return this.http.get<RandomImageResponse>(breedUrl).pipe(
      map(response => response.message)
    )
  }
}
