import { get, post } from './request';

const URL = '/api';
const ALBUMS_URL = `${URL}/albums`;
// const IMAGES_URL = `${URL}/images`;

export const fetchLoadAlbums = () => get(ALBUMS_URL);
export const fetchAlbum = (id) => get(`${ALBUMS_URL}/${id}`);
export const fetchAddAlbum = (data) => post(`${ALBUMS_URL}/new`, data);