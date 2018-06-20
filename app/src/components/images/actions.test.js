jest.mock('../../services/db', () => ({
  fetchLoadImages: jest.fn(),
  fetchAddImage: jest.fn(),
}));

import { loadImages, addImage } from './actions';
import { IMAGE_ADD, IMAGES_LOAD } from './reducers';
import { fetchAddImage, fetchLoadImages } from '../../services/db';

describe('image actions', () => {

  it('loads images', () => {
    const promise = Promise.resolve({ albumId: 123 });
    fetchLoadImages.mockReturnValueOnce(promise);
  
    const { type, payload } = loadImages(123);
    expect(type).toBe(IMAGES_LOAD);
    expect(fetchLoadImages.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
  
  it('adds an image', () => {
    const image = { title: 'image1',
      description: 'I am an image',
      coverImage: 'http://www.puppy.com/image.png'
    };
    const promise = Promise.resolve(image);
    fetchAddImage.mockReturnValueOnce(promise);
  
    const { type, payload } = addImage(image);
    expect(type).toBe(IMAGE_ADD);
    expect(fetchAddImage.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
});