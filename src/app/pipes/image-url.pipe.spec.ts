import { of } from 'rxjs';
import { DogImageService } from '../services/dog-image.service';
import { ImageUrlPipe } from './image-url.pipe';

describe('ImageUrlPipe', () => {
  let imageSpy: jasmine.SpyObj<DogImageService>;
  let pipe: ImageUrlPipe;

  beforeEach(() => {
    imageSpy = jasmine.createSpyObj('imageSpy', ['getImageUrl']);
    pipe = new ImageUrlPipe(imageSpy);
  });

  it('converts breed into an API call', () => {
    const returnUrl = of('imgUrl');
    const breed = {apiName: 'pug'};
    imageSpy.getImageUrl.and.returnValue(returnUrl);
    const result = pipe.transform(breed);

    expect(result).toEqual(returnUrl);
    expect(imageSpy.getImageUrl).toHaveBeenCalledWith(breed);
  });
});
