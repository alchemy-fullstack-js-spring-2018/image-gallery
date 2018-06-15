import { ALBUMS_SHOW, ADD_ALBUMS } from './reducer';
import { fetchLoadAlbums, fetchAddAlbums } from '../services/db';

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

export function addAlbums() {
  return {
    type: ADD_ALBUMS,
    payload: fetchAddAlbums() // POST request goes here
  };
}