import { get, post } from './request';

const URL = 'http://localhost:3000/api';
const ALBUMS_URL = `${URL}/albums`;
// const IMAGES_URL = `${URL}/images`;

export const fetchLoadAlbums = () => get(ALBUMS_URL);
export const fetchAddAlbum = () => post(`${ALBUMS_URL}/new`);