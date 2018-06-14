import { get, put } from './request';

const URL = '/api';
const ALBUMS_URL = `${URL}/albums`;

export const getAllAlbums = () => get(ALBUMS_URL);
export const postAlbum = (album) => put(ALBUMS_URL, album);