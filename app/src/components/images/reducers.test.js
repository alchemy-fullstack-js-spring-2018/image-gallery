import {
  imagesByAlbum,
  getImagesByAlbum,
  IMAGE_ADD,
  IMAGES_LOAD } from './reducers';

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

describe('image selectors', () => {
  
  it('gets images by ablumId', () => {
    const imagesByAlbum = [image1, image2];
    const got = getImagesByAlbum({ imagesByAlbum });
    expect(got).toEqual(imagesByAlbum);
  });
});