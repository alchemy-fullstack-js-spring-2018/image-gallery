import { getAllAlbums, postAlbum } from '../../services/api';
import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: getAllAlbums()
  };
}

export function addAlbum(album) {
  return {
    type: ALBUM_ADD,
    payload: postAlbum(album)
  };
}