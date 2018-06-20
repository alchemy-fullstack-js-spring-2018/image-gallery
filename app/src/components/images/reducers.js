export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGES_LOAD = 'IMAGES_LOAD';

export const getImagesByAlbum = state => state.imagesByAlbum;

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