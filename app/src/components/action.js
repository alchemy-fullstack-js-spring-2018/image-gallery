import { SHOW_ALBUMS, ADD_ALBUMS } from './reducer';
import { dummyfunc, dummyfunc2 } from '../../services/api';

export function loadAlbums() {
  return {
    type: SHOW_ALBUMS,
    payload: dummyfunc //GET request goes here
  };
}

export function addAlbums() {
  return {
    type: ADD_ALBUMS,
    payload: dummyfunc2 // DELETE request goes here
  };
}