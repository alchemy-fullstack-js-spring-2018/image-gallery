import { get, post } from './request';

const URL = '/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;
const AUTH_URL = `${URL}/auth`;

export const fetchLoadAlbums = () => get(ALBUMS_URL);
export const fetchAlbum = (id) => get(`${ALBUMS_URL}/${id}`);
export const fetchAddAlbum = (data) => post(`${ALBUMS_URL}/new`, data);
export const fetchAddImage = (data) => post(`${IMAGES_URL}/new`, data);
export const fetchLoadImages = (id) => get(`${IMAGES_URL}/${id}`);

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);
export const verifyUser = token => get(`${AUTH_URL}/verify`, { 
  headers: {
    Authorization: token
  }
});