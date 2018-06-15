import { getAllAlbums, postAlbum, getOneAlbum } from '../../services/api';
import { ALBUMS_LOAD, ALBUM_ADD, ALBUM_LOAD } from './reducers';

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

export function loadAlbum(id) {
  return {
    type: ALBUM_LOAD,
    payload: getOneAlbum(id)
  };
}