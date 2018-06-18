jest.mock('../services/db', () => ({
  fetchLoadAlbums: jest.fn(),
  fetchAlbum: jest.fn(),
  fetchAddAlbum: jest.fn(),
  fetchAddImage: jest.fn(),
}));

import { loadAlbums, addAlbum, showAlbum, addImage } from './actions';
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