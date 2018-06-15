export const ALBUMS_SHOW = 'ALBUMS_SHOW';
export const ALBUM_SHOW = 'ALBUM_SHOW';
export const ALBUMS_ADD = 'ALBUMS_ADD';

export const getAlbumsById = state => state.albumsById;
export const getAlbumsList = state => state.albumList;
export const getAblumById = (state, id) => getAlbumsById(state)[id];

export const getPet = state => state.pet;


export function albumsbyId(state = [], { type, payload }) {
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


export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_SHOW:
      return payload.map(album => album._id);
    default: 
      return state;
  }
}