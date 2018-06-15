import {
  albums,
  album,
  ALBUMS_LOAD,
  ALBUM_ADD,
  ALBUM_LOAD,
  getAlbums,
  getCurrentAlbum } from './reducers';

const album1 = {
  title: 'kittens',
  description: 'all the best kittens',
  images: [{ title: 'kitten1' }]
};

const album2 = {
  title: 'puppies',
  description: 'only the cutest puppies'
};

describe('albums reducer', () => {

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

describe('album reducer', () => {
  it('has a default value of an empty object', () => {
    const state = album(undefined, {});
    expect(state).toEqual(null);
  });

  it('loads a single album', () => {
    const state = album(null, { type: ALBUM_LOAD, payload: album1 });
    expect(state).toEqual(album1);
  });
});

describe('selectors', () => {
  it('gets albums', () => {
    const albums = [album1, album2];
    const got = getAlbums({ albums });
    expect(got).toEqual(albums);
  });

  it('gets the current album', () => {
    const album = album1;
    const got = getCurrentAlbum({ album });
    expect(got).toEqual(album);
  });
});