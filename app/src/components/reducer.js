export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_ADD = 'ALBUM_ADD';
export const ALBUM_SHOW = 'ALBUM_SHOW';
export const IMAGE_ADD = 'IMAGE_ADD';

export const getAlbumsById = state => state.albumsById;
export const getAlbumsList = state => state.albumList;
export const getAlbumById = (state, id) => getAlbumsById(state)[id];

export function albumsById(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload.reduce((map, album) => {
        map[album._id] = { 
          ...state[album._id],
          ...album
        };
        return map;
      }, {});
    case ALBUM_SHOW:
      return {
        ...state,
        [payload._id]: payload
      };
    case ALBUM_ADD:
      return [...state, payload];
    default:
      return state;
  }
}

export function albumList(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload.map(album => album._id);
    case ALBUM_ADD:
      return [...state, payload._id];
    default: 
      return state;
  }
}

export function imagesByAlbum(state = [], { type, payload }) {
  switch(type) {
    case ALBUM_SHOW:
      return {
        ...state,
        [payload._id]: payload
      };
    case ALBUM_ADD:
      return [...state, payload];
    default:
      return state;
  }
}