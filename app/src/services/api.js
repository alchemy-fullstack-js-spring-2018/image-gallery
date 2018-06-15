import { get, put } from './request';

const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const postAlbum = (album) => put(ALBUMS_URL, album);