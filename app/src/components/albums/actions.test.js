jest.mock('../../services/api', () => ({
  getAllAlbums: jest.fn(),
  postAlbum: jest.fn()
}));

import {
  ALBUMS_LOAD,
  ALBUM_ADD } from './reducers';

import {
  loadAlbums,
  addAlbum } from './actions';
import { getAllAlbums, postAlbum } from '../../services/api';

describe('action creators', () => {
  it('creates a load action', () => {
    const promise = Promise.resolve(['album']);
    getAllAlbums.mockReturnValueOnce(promise);

    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    expect(getAllAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it('creates an add action', () => {
    const album = { title: 'stuff', description: 'and things' };

    const promise = Promise.resolve(album);
    postAlbum.mockReturnValueOnce(promise);

    const { type, payload } = addAlbum(album);
    expect(type).toBe(ALBUM_ADD);
    expect(postAlbum.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
});