jest.mock('../services/db', () => ({
  fetchLoadAlbums: jest.fn(),
  fetchAlbum: jest.fn(),
  fetchAddAlbum: jest.fn(),
  fetchLoadImages: jest.fn(),
  fetchAddImage: jest.fn(),
}));

import { loadAlbums, addAlbum, showAlbum, loadImages, addImage } from './actions';
import { ALBUMS_LOAD, ALBUM_ADD, ALBUM_SHOW, IMAGE_ADD, IMAGES_LOAD } from './reducers';
import { fetchLoadAlbums, fetchAlbum, fetchAddAlbum, fetchAddImage, fetchLoadImages } from '../services/db';

describe('album actions', () => {

  it('loads albums', () => {
    const promise = Promise.resolve();
    fetchLoadAlbums.mockReturnValueOnce(promise);

    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    expect(fetchLoadAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it('loads a single album', () => {
    const promise = Promise.resolve({ _id: 123 });
    fetchAlbum.mockReturnValueOnce(promise);

    const { type, payload } = showAlbum(123);
    expect(type).toBe(ALBUM_SHOW);
    expect(fetchLoadAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it('adds an album', () => {
    const album = { title: 'album1',
      description: 'I am an album',
      coverImage: 'http://www.puppy.com/image.png'
    };
    const promise = Promise.resolve(album);
    fetchAddAlbum.mockReturnValueOnce(promise);

    const { type, payload } = addAlbum(album);
    expect(type).toBe(ALBUM_ADD);
    expect(fetchLoadAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
});

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