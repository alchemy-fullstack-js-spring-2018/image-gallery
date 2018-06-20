import { get, post } from './request';

const URL = '/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;
const AUTH_URL = `${URL}/auth`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const getAlbum = id => get(`${ALBUMS_URL}/${id}`);
export const postAlbum = album => post(ALBUMS_URL, album);
export const getImages = id => get(`${ALBUMS_URL}/${id}/images`);
export const postImage = (image, albumId) => post(`${ALBUMS_URL}/${albumId}/images`, image);

export const getAllImages = () => get(IMAGES_URL);

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});