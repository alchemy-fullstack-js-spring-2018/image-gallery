import { get, post } from './request';

const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
const AUTH_URL = `${URL}/auth`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const getAlbum = (id) => get(`${ALBUMS_URL}/${id}`);
export const postAlbum = (album) => post(ALBUMS_URL, album);
export const getImages = (albumId) => get(`${ALBUMS_URL}/${albumId}/images`);
export const postImage = (image, albumId) => post(`${ALBUMS_URL}/${albumId}/images`, image);

//auth routes
export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});