export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_ADD = 'ALBUM_ADD';
export const IMAGES_LOAD = 'IMAGES_LOAD';
export const IMAGE_ADD = 'IMAGE_ADD';
export const LOAD_ALL_IMAGES = 'LOAD_ALL_IMAGES';


export const getAlbums = state => state.albums;
export const getImages = state => state.images;
export const getImagesAll = state => state.imagesAll;
export const getImageId = state => state.imageId;
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
    case IMAGES_LOAD: 
      return payload;
    case IMAGE_ADD:
      return [...state, payload];
    default:
      return state;
  } 
}

export function imagesAll(state = [], { type, payload }) {
  switch (type) {
    case LOAD_ALL_IMAGES:
      return payload;
    default:
      return state;
  }
}