export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_ADD = 'ALBUM_ADD';
export const ALBUM_LOAD = 'ALBUM_LOAD';
export const IMAGE_ADD = 'IMAGE_ADD';

export const getAlbums = state => state.albums;
export const getCurrentAlbum = state => state.album;
export const getCurrentAlbumId = state => getCurrentAlbum(state)._id;

export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload;
    case ALBUM_ADD:
      return [...state, payload];
    default:
      return state;
  }
}

export function album(state = null, { type, payload }) {
  switch(type) {
    case ALBUM_LOAD:
      return payload;
    case IMAGE_ADD:
      return {
        ...state,
        images: [...state.images, payload]
      };
    default:
      return state;
  }
}