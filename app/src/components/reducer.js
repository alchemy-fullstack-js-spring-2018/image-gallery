export const ALBUMS_SHOW = 'ALBUMS_SHOW';
export const ALBUM_SHOW = 'ALBUM_SHOW';
export const ALBUM_ADD = 'ALBUM_ADD';

export const getAlbumsById = state => state.albumsById;
export const getAlbumsList = state => state.albumList;
export const getAlbumById = (state, id) => getAlbumsById(state)[id];

export const getPet = state => state.pet;


export function albumsById(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_SHOW:
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
    default:
      return state;
  }
}


export function albumList(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_SHOW:
      return payload.map(album => album._id);
    case ALBUM_ADD:
      return [...state, payload];
    default: 
      return state;
  }
}