import {
  albums,
  ALBUMS_LOAD,
  ALBUM_ADD } from './reducers';

describe('albums reducer', () => {
  it('has a default value of an empty array', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });
});