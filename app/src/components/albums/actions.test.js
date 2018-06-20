jest.mock('../../services/api', () => ({
  getAllAlbums: jest.fn(),
  postAlbum: jest.fn(),
  getOneAlbum: jest.fn(),
  postImage: jest.fn()
}));

import {
  ALBUMS_LOAD,
  ALBUM_ADD,
  ALBUM_LOAD,
  IMAGE_ADD } from './reducers';

import {
  loadAlbums,
  addAlbum,
  loadAlbum,
  addImage } from './actions';
import { getAllAlbums, postAlbum, getOneAlbum, postImage } from '../../services/api';

describe('action creators', () => {
  it('creates a load action for all albums', () => {
    const promise = Promise.resolve(['album']);
    getAllAlbums.mockReturnValueOnce(promise);

    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    expect(getAllAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it('creates an add action for a new album', () => {
    const album = { title: 'stuff', description: 'and things' };

    const promise = Promise.resolve(album);
    postAlbum.mockReturnValueOnce(promise);

    const { type, payload } = addAlbum(album);
    expect(type).toBe(ALBUM_ADD);
    expect(postAlbum.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it('creates a load action for a single album', () => {
    const promise = Promise.resolve({ title: 'album1' });
    getOneAlbum.mockReturnValueOnce(promise);

    const { type, payload } = loadAlbum();
    expect(type).toBe(ALBUM_LOAD);
    expect(getOneAlbum.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it('creates an add action for a new image', () => {
    const image = { title: 'stuff', description: 'and things' };
    const albumId = '1';

    const promise = Promise.resolve(image);
    postImage.mockReturnValueOnce(promise);

    const { type, payload } = addImage(albumId, image);
    expect(type).toBe(IMAGE_ADD);
    expect(postImage.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
});