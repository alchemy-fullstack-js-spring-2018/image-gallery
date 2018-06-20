import { albums, ALBUMS_LOAD, ALBUM_ADD, images, IMAGE_ADD, IMAGES_LOAD } from './reducers';

describe('Album reducers', () => {

  it('returns empty array for default state', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });
  
  it('loads albums', () => {
    const album = {
      title: 'A Scenic Beach',
      description: 'A beach...',
      posterImage: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg'
    };
    const state = albums(undefined, { type: ALBUMS_LOAD, payload: [album] });
    expect(state).toEqual([album]);
  });
  
  it('adds album', () => {
    const album = {
      title: 'A Scenic Beach',
      description: 'A beach...',
      posterImage: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg'
    };
    const album2 = {
      title: 'A very Scenic Beach',
      description: 'A beach... scenic',
      posterImage: 'google.com/beach'
    };
    const state = albums([album], { type: ALBUM_ADD, payload: album2 });
    expect(state).toEqual([album, album2]);
  });
  
});

describe('images reducers', () => {
  
  it('returns empty array for default state', () => {
    const state = images(undefined, {});
    expect(state).toEqual([]);
  });
  
  it('loads images', () => {
    const image = {
      title: 'A Scenic Beach',
      description: 'A beach...',
      url: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
      albumId: '4'
    };
    const state = images(undefined, { type: IMAGES_LOAD, payload: [image] });
    expect(state).toEqual([image]);
  });
  
  it('adds image', () => {
    const image = {
      title: 'A Scenic Beach',
      description: 'A beach...',
      url: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
      albumId: '4'
    };
    const image2 = {
      title: 'A very Scenic Beach',
      description: 'A beach... scenic',
      url: 'google.com/beach',
      albumId: '4'
    };
    const state = images([image], { type: IMAGE_ADD, payload: image2 });
    expect(state).toEqual([image, image2]);
  });

});