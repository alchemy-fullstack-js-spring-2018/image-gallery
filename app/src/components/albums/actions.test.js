jest.mock('../../services/api', () => ({
  getAllAlbums: jest.fn()
}));

import {
  ALBUMS_LOAD,
  ALBUMS_ADD } from './reducers';

import {
  loadAlbums,
  addAlbum } from './actions';
import { getAllAlbums } from '../../services/api';

describe('action creators', () => {
  it('creates a load action', () => {
    const promise = Promise.resolve();
    getAllAlbums.mockReturnValueOnce(promise);

    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    expect(getAllAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
});