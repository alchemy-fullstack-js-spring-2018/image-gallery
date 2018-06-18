import { ALBUMS_LOAD, ALBUM_ADD, ALBUM_SHOW, IMAGE_ADD } from './reducers';
import { fetchLoadAlbums, fetchAddAlbum, fetchAlbum, fetchAddImage } from '../services/db';

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: fetchLoadAlbums() 
  };
}

export function addAlbum(data) {
  return {
    type: ALBUM_ADD,
    payload: fetchAddAlbum(data)
  };
}

export function showAlbum(id) {
  return {
    type: ALBUM_SHOW,
    payload: fetchAlbum(id)
  };
}

export function addImage(data) {
  return {
    type: IMAGE_ADD,
    payload: fetchAddImage(data)
  };
}