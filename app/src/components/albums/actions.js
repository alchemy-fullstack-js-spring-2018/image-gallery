import { getAllAlbums } from '../../services/api';
import { ALBUMS_LOAD } from './reducers';

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: getAllAlbums()
  };
}