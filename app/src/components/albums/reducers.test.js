import { user, getUser, USER_AUTH, LOGOUT, albums, ALBUMS_LOAD, ALBUM_ADD, images, LOAD_IMAGES, IMAGE_ADD, } from './reducers';

describe('Album Reducers', () => {

  it('Returns an empty array for default state', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  it('Loads Albums', () => {
    const state = albums(undefined, { type: ALBUMS_LOAD, payload: [{ title: 'album' }] });
    expect(state).toEqual([{ title: 'album' }]);
  });

  it('Adds an Album', () => {
    const state = albums([{ title: 'album1' }], { type: ALBUM_ADD, payload: { title: 'album2' } });
    expect(state).toEqual([{ title: 'album1' }, { title: 'album2' }]);
  });

});

describe('Image Reducers', () => {

  it('Returns an empty array for default state', () => {
    const state = images(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads album images', () => {
    const state = images(undefined, { type: LOAD_IMAGES, payload: [{ title: 'fakeImage1' }] }); 
    expect(state).toEqual([{ title: 'fakeImage1' }]);
  });

  it('Adds an Image', () => {
    const state = images([{ title: 'fakeImage' }], { type: IMAGE_ADD, payload: { title: 'fakeImage2' } });
    expect(state).toEqual([{ title: 'fakeImage' }, { title: 'fakeImage2' }]);
  });

});

describe('Auth Reducers tests', () => {

  it('initializers to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('loads user', () => {
    const data = { name: 'user' };
    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toEqual(data);
  });

});
  
