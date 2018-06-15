import { get, post } from './request';

const URL = 'api';
const ALBUMS_URL = `${URL}/albums`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const postAlbum = album => post(ALBUMS_URL, album);
export const getOneAlbum = id => get(`${ALBUMS_URL}/${id}`);