import { SHOW_ALBUMS, ADD_ALBUMS } from './reducer';
import { fetchLoadAlbums, fetchAddAlbums } from '../services/db';

export function loadAlbums() {
  return {
    type: SHOW_ALBUMS,
    payload: fetchLoadAlbums() //GET request goes here
  };
}

export function addAlbums() {
  return {
    type: ADD_ALBUMS,
    payload: fetchAddAlbums() // POST request goes here
  };
}