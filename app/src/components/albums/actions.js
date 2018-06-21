/* eslint no-console: 0 */

import { ALBUMS_LOAD, ALBUM_ADD, IMAGES_LOAD, IMAGE_ADD, LOAD_ALL_IMAGES } from './reducers';
import { getAllAlbums, postAlbum, getAllImages, getImages, postImage } from '../../services/api';

export const loadAlbums = () => dispatch => {
  getAllAlbums()
    .then(
      albums => {
        console.log(albums);
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      },
      err => {
        console.error(err);
      }
    );
};

export const loadAllImages = () => dispatch => {
  getAllImages()
    .then(
      images => {
        console.log(images);
        dispatch({
          type: LOAD_ALL_IMAGES,
          payload: images
        });
      },
      err => {
        console.error(err);
      }
    );
};

export const addAlbum = album => dispatch => {
  postAlbum(album)
    .then(
      album => {
        dispatch({
          type: ALBUM_ADD,
          payload: album
        });
      },
      err => {
        console.error(err);
      }
    );
};

export const loadImages = (id) => dispatch => {
  getImages(id)
    .then(
      images => {
        dispatch({
          type: IMAGES_LOAD,
          payload: images
        });
      },
      err => {
        console.error(err);
      }
    );
};

export const addImage = (image, albumId) => dispatch => {
  postImage(image, albumId)
    .then(
      image => {
        dispatch({
          type: IMAGE_ADD,
          payload: image
        });
      },
      err => {
        console.error(err);
      }
    );
};
