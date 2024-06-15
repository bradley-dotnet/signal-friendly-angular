import { HttpClient } from '@angular/common/http';
import { DogDataService } from './dog-data.service';
import { of, take } from 'rxjs';

describe('DogDataService', () => {
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let service: DogDataService;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj<HttpClient>('httpSpy', ['get']);
    service = new DogDataService(httpSpy);
  });

  it('should fetch local JSON file', (done) => {
    const breeds = [
      {
        "name": "Border Collie",
        "apiName": "collie,border",
        "flopEar": false,
        "highEnergy": true,
        "longCoat": true,
        "darkColor": true
      }
    ];
    httpSpy.get.and.returnValue(of(breeds));

    service.getBreeds().pipe(
      take(1)
    ).subscribe((result) => {
      expect(result).toEqual(breeds);
      done();
    });
  });
});
