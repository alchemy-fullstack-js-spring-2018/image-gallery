import { get, post } from './request';

const URL = 'http//:localhost:3000';
const ALBUMS_URL = `${URL}/albums`;

export const fetchLoadAlbums = () => get(ALBUMS_URL);
export const fetchAddAlbum = () => post(`${ALBUMS_URL}/new`);