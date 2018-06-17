import { get, post } from './request';

const URL = '/api';
const ALBUMS_URL = `${URL}/albums`;
const IMAGES_URL = `${URL}/images`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const postAlbum = album => post(ALBUMS_URL, album);
export const getOneAlbum = id => get(`${ALBUMS_URL}/${id}`);
export const postImage = image => post(IMAGES_URL, image);