import { getAllAlbums, postAlbum, getImages, postImage } from '../../services/api';
import { ALBUMS_LOAD, ALBUM_ADD, LOAD_IMAGES, IMAGE_ADD } from './reducers';

export const loadAlbums = () => dispatch => {
  getAllAlbums()
    .then(
      albums => {
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      },
      err => {
        console.log(err);
      }
    );
};

export const addAlbum = (album) => dispatch => {
  postAlbum(album)
    .then(
      album => {
        dispatch({
          type: ALBUM_ADD,
          payload: album
        });
      },
      err => {
        console.log(err);
      }
    );
};

export const loadImages = (albumId) => dispatch => {
  getImages(albumId)
    .then(
      images => {
        dispatch({
          type: LOAD_IMAGES,
          payload: images
        });
      },
      err => {
        console.log(err);
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
        console.log(err);
      }
    );
};