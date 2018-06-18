import { get, post } from './request';

const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const getAlbum = (id) => get(`${ALBUMS_URL}/${id}`);
export const postAlbum = (album) => post(ALBUMS_URL, album);
export const getImages = (albumId) => get(`${ALBUMS_URL}/${albumId}/images`);
export const postImage = (image, albumId) => post(`${ALBUMS_URL}/${albumId}/images`, image);