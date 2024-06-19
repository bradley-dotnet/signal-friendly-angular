import { of, take } from 'rxjs';
import { DogImageService } from './dog-image.service';
import { HttpClient } from '@angular/common/http';

describe('DogImageService', () => {
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let service: DogImageService;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj<HttpClient>('httpSpy', ['get']);
    httpSpy.get.and.returnValue(of({ message: 'imgUrl', status: 'success'}));
    service = new DogImageService(httpSpy);
  });

  it('should worth with single-level breed', (done) => {
    const breed = { apiName: 'dachshund' };
    service.getImageUrl(breed).pipe(
      take(1)
    ).subscribe(result => {
      expect(result).toEqual('imgUrl');
      expect(httpSpy.get).toHaveBeenCalledWith('https://dog.ceo/api/breed/dachshund/images/random');
      done();
    });
  });

  it('should translate breed URL for nested breed', (done) => {
    const breed = { apiName: 'collie.border' };
    service.getImageUrl(breed).pipe(
      take(1)
    ).subscribe(result => {
      expect(result).toEqual('imgUrl');
      expect(httpSpy.get).toHaveBeenCalledWith('https://dog.ceo/api/breed/collie/border/images/random');
      done();
    });
  });
});
