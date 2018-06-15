import { ALBUMS_SHOW, ALBUM_ADD } from './reducer';
import { fetchLoadAlbums, fetchAddAlbum } from '../services/db';

export function loadAlbums() {
  return (dispatch) => {
    return fetchLoadAlbums()
      .then(albums => {
        dispatch({
          type: ALBUMS_SHOW,
          payload: albums 
        });
      });
  };
}

export function addAlbums(data) {
  return (dispatch) => {
    return fetchAddAlbum(data)
      .then(album => {
        dispatch({
          type: ALBUM_ADD,
          payload: album
        });
      });
  };
}