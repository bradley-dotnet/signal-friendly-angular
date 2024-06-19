import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../model/breed.interface';

@Injectable({
  providedIn: 'root'
})
export class DogDataService {

  constructor(private http: HttpClient) { }

  public getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>('/assets/data/breeds.json');
  }
}
