import {
  albums,
  ALBUMS_LOAD,
  ALBUM_ADD } from './reducers';

describe('albums reducer', () => {

  const album1 = {
    title: 'kittens',
    description: 'all the best kittens' 
  };

  const album2 = {
    title: 'puppies',
    description: 'only the cutest puppies'
  };

  it('has a default value of an empty array', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads albums', () => {
    const state = albums([], { type: ALBUMS_LOAD, payload: [album1, album2] });
    expect(state).toEqual([album1, album2]);
  });

  it('adds an album', () => {
    const state = albums([album1], { type: ALBUM_ADD, payload: album2 });
    expect(state).toEqual([album1, album2]);
  });
});