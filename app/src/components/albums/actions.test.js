jest.mock('../../services/api', () => ({
  getAllAlbums: jest.fn(),
  postAlbum: jest.fn()
}));

// import { loadAlbums, addAlbum } from './actions';
// import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';
// import { getAllAlbums, postAlbum } from '../services/api';

describe('album actions', () => {
  it('loads albums', () => {

  });
});