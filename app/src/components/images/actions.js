import { IMAGE_ADD, IMAGES_LOAD } from './reducers';
import { fetchLoadImages, fetchAddImage } from '../../services/db';

export function loadImages(id) {
  return {
    type: IMAGES_LOAD,
    payload: fetchLoadImages(id) 
  };
}
  
export function addImage(data) {
  return {
    type: IMAGE_ADD,
    payload: fetchAddImage(data)
  };
}

export function gallerySize(){
  let size;
  switch(true){
    case window.innerWidth > 1800:
      size = 'w_580';
      return size;
    case window.innerWidth > 600:
      size = 'w_500';
      return size;
    case window.innerWidth > 400:
      size = 'w_400';
      return size;
    default:
      size = 'w_320';
      return size;
  }
}