import { ALBUMS_LOAD, ALBUM_ADD, ALBUM_SHOW, IMAGE_ADD } from './reducers';
import { fetchLoadAlbums, fetchAddAlbum, fetchAlbum, fetchAddImage } from '../services/db';

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

export function addAlbum(data) {
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

export function addImage(data) {
  return (dispatch) => {
    return fetchAddImage(data)
      .then(image => {
        dispatch({
          type: IMAGE_ADD,
          payload: image
        });
      });
  };
}