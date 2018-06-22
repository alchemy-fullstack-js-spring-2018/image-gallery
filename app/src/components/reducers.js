export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_ADD = 'ALBUM_ADD';
export const ALBUM_SHOW = 'ALBUM_SHOW';
export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGES_LOAD = 'IMAGES_LOAD';

export const getAlbumById = state => state.albumById;
export const getAlbumsList = state => state.albumList;
export const getImagesByAlbum = state => state.imagesByAlbum;

export function albumById(state = {}, { type, payload }) {
  switch(type) {
    case ALBUM_SHOW:
      return {
        [payload._id]: payload
      };
    case ALBUM_ADD:
      return {
        [payload._id]: payload
      };
    default:
      return state;
  }
}

export function albumList(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload;
    case ALBUM_ADD:
      return [state, payload];
    default: 
      return state;
  }
}

export function imagesByAlbum(state = [], { type, payload }) {
  switch(type) {
    case IMAGE_ADD:
      return [...state, payload];
    case IMAGES_LOAD:
      return payload;
    default:
      return state;
  }
}