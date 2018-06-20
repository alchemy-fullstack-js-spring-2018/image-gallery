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
  