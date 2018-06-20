export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_LOAD = 'ALBUM_LOAD';
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';
export const ERROR = 'ERROR';

export function loading(state = false, { type }) {
  switch (type) {
    default:
      return state;
  }
}