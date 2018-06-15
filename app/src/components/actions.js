import { ALBUMS_LOAD, ALBUM_ADD, ALBUM_SHOW } from './reducers';
import { fetchLoadAlbums, fetchAddAlbum, fetchAlbum } from '../services/db';

export function loadAlbums() {
  return (dispatch) => {
    return fetchLoadAlbums()
      .then(albums => {
        dispatch({
          type: ALBUMS_LOAD,
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

export function showAlbum(id) {
  return (dispatch) => {
    return fetchAlbum(id)
      .then(album => {
        dispatch({
          type: ALBUM_SHOW,
          payload: album
        });
      });
  };
}
