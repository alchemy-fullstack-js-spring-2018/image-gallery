import { getAllAlbums, postAlbum, getOneAlbum, postImage } from '../../services/api';
import { ALBUMS_LOAD, ALBUM_ADD, ALBUM_LOAD, IMAGE_ADD } from './reducers';

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

export function clearAlbum() {
  return {
    type: ALBUM_LOAD,
    payload: null
  };
}

export function addImage(albumId, image) {
  image.albumId = albumId;

  return {
    type: IMAGE_ADD,
    payload: postImage(image)
  };
}