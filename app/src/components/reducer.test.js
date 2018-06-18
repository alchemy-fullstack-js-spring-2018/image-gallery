import {
  albumById,
  albumList,
  imagesByAlbum,
  getAlbumById,
  getAlbumsList,
  getImagesByAlbum,
  ALBUMS_LOAD,
  ALBUM_LOAD,
  ALBUM_SHOW,
  ALBUM_ADD,
  IMAGE_ADD,
  IMAGES_LOAD } from './reducers';
  
const album1 = {
  _id: 123,
  title: 'Spain Trip',
  description: 'This one time I went to Spain',
  coverImage: 'http://images.com/spain.png'
};
  
const album2 = {
  _id: 456,
  title: 'France Trip',
  description: 'This other time I went to France',
  coverImage: 'http://images.com/france.png'
};
  
describe('albumById reducer', () => {
  
  it('has a default value of an empty object', () => {
    const state = albumById(undefined, {});
    expect(state).toEqual({});
  });
  
  it('shows an album', () => {
    const state = albumById([], { type: ALBUM_SHOW, payload: album1 });
    expect(state).toEqual({ 123: album1 });
  });
  
  it('adds an album', () => {
    const state = albumById([album1], { type: ALBUM_ADD, payload: album2 });
    expect(state).toEqual({ 456: album2 });
  });
});
  
describe('albumList reducer', () => {
  it('has a default value of an empty array', () => {
    const state = albumList(undefined, []);
    expect(state).toEqual([]);
  });
  
  it('loads all albums', () => {
    const state = albumList(null, { type: ALBUMS_LOAD, payload: [album1] });
    expect(state).toEqual([album1]);
  });
  
  it('adds an album', () => {
    const state = albumList(album1, { type: ALBUM_ADD, payload: album2 });
    expect(state).toEqual([album1, album2]);
  });
});
  
// describe('selectors', () => {
//   it('gets albums', () => {
//     const albums = [album1, album2];
//     const got = getAlbums({ albums });
//     expect(got).toEqual(albums);
//   });
  
//   it('gets the current album', () => {
//     const album = album1;
//     const got = getCurrentAlbum({ album });
//     expect(got).toEqual(album);
//   });
// });