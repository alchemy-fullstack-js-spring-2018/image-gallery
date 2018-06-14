export const ALBUMS_SHOW = 'ALBUMS_SHOW';
export const ALBUMS_ADD = 'ALBUMS_ADD';

export const getAlbums = state => state.albums;


export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_SHOW:
      return payload;
    case ALBUMS_ADD:
      return [...state, payload];
    default:
      return state;
  }
}


export function addAlbum() {

}