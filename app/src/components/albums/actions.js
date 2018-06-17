import {
  ALBUMS_LOAD,
  ALBUM_ADD,
  ALBUM_LOAD,
  getAlbums
} from './reducers';

import {
  getAllAlbums,
  postAlbum,
  getImagesByAlbum
} from '../../services/api';

export function loadAlbums() {
  return (dispatch) => {
    getAllAlbums()
      .then(albums => {
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      });
  };
}

export function createAlbum(album) {
  return (dispatch) => {
    postAlbum(album)
      .then(NewAlbum => {
        dispatch({
          type: ALBUM_ADD,
          payload: NewAlbum
        });
      });
  };
}

export function loadAlbum(albumId) {
  return (dispatch, getState) => {
    const state = getState();
    const albums = getAlbums(state);
    dispatch({
      type: ALBUM_LOAD,
      payload: { 
        albums,
        albumId
      }
    });

    getImagesByAlbum(albumId)
      .then(images => {
        dispatch({
          type: IMAGES_LOAD,
          payload: images
        });
      });
  };
}