jest.mock('../../services/api', () => ({
  getAllAlbums: jest.fn(),
  postAlbum: jest.fn()
}));

import { loadAlbums, addAlbum } from './actions';
import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';
import { getAllAlbums, postAlbum } from '../../services/api';

describe.skip('Album Actions', () => {
  it('Loads Albums', () => {
    const promise = Promise.resolve();
    getAllAlbums.mockReturnValueOnce(promise);

    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    expect(getAllAlbums.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it.skip('Adds Album', () => {
    const albumToAdd = { title: 'album2' };
    const promise = Promise.resolve(albumToAdd);
    postAlbum.mockReturnValueOnce(promise);
    // const originalStore = [{ title: 'album1' }];

    const { type, /*payload*/ } = addAlbum(albumToAdd);
    expect(type).toBe(ALBUM_ADD);
    expect(postAlbum.mock.calls.length).toBe(1);
    expect(postAlbum.mock.calls[0][0]).toBe(albumToAdd);

    // return payload.then(({  }))
  });
});