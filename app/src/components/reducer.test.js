import {
  albumById,
  albumList,
  imagesByAlbum,
  getAlbumById,
  getAlbumsList,
  getImagesByAlbum,
  ALBUMS_LOAD,
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

const image1 = {
  albumId: 123,
  title: 'Spain Trip',
  description: 'This one time I went to Spain',
  url: 'http://images.com/spain.png'
};
    
const image2 = {
  albumId: 456,
  title: 'France Trip',
  description: 'This other time I went to France',
  url: 'http://images.com/france.png'
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

describe('imagesByAlbum reducer', () => {
  it('has a default value of an empty array', () => {
    const state = imagesByAlbum(undefined, []);
    expect(state).toEqual([]);
  });
    
  it('loads all images', () => {
    const state = imagesByAlbum(null, { type: IMAGES_LOAD, payload: [image1] });
    expect(state).toEqual([image1]);
  });
    
  it('adds an image', () => {
    const state = imagesByAlbum([image1], { type: IMAGE_ADD, payload: image2 });
    expect(state).toEqual([image1, image2]);
  });
});
  
describe('selectors', () => {
  it('gets album by Id', () => {
    const albumById = album1;
    const got = getAlbumById({ albumById });
    expect(got).toEqual(albumById);
  });
  
  it('gets album list', () => {
    const albumList = [album1, album2];
    const got = getAlbumsList({ albumList });
    expect(got).toEqual(albumList);
  });

  it('gets images by ablumId', () => {
    const imagesByAlbum = [image1, image2];
    const got = getImagesByAlbum({ imagesByAlbum });
    expect(got).toEqual(imagesByAlbum);
  });
});