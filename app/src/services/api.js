import { get, post } from './request';

const URL = 'api/albums';
const imagesURL = 'api/images';
const AUTH_URL = 'api/auth';

export const getAllAlbums = () => get(URL);
export const getAllImages = () => get(imagesURL);
export const getAlbum = id => get(`${URL}/${id}`);
export const postAlbum = album => post(URL, album);
export const getImages = id => get(`${URL}/${id}/images`);
export const postImage = (image, albumId) => post(`${URL}/${albumId}/images`, image);

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, { 
  headers: {
    Authorization: token
  }
});