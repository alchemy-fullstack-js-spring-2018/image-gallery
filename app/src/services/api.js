import { get, post } from './request';

const URL = 'api';
const ALBUMS_URL = `${URL}/albums`;

export const getAllAlbums = () => get(ALBUMS_URL);