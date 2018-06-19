export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_ADD = 'ALBUM_ADD';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const IMAGE_ADD = 'IMAGE_ADD';
export const USER_AUTH = 'USER_AUTH';
export const LOGOUT = 'LOGOUT';
export const CHECKED_AUTH = 'CHECKED_AUTH';

export const getAlbums = state => state.albums;
export const getImagesByAlbum = state => state.images;
export const getUser = state => state.user;
export const getCheckedAuth = state => state.checkedAuth;

export function albums(state = [], { type, payload }) {
  switch (type) {
    case ALBUMS_LOAD: 
      return payload;
    case ALBUM_ADD:
      return [...state, payload];
    default:
      return state;
  }
}

export function images(state = [], { type, payload }) {
  switch (type) {
    case LOAD_IMAGES:
      return payload;
    case IMAGE_ADD:
      return [...state, payload];
    default:
      return state;
  }
}

export function user(state = null, { type, payload }) {
  switch (type) { 
    case USER_AUTH:
      return payload;
    case LOGOUT:
      return null; 
    default:
      return state;
  
  }
}