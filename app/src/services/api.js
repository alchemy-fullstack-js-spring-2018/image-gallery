import { get, post } from './request';

const URL = 'api/albums';

export const getAllAlbums = () => get(URL);
export const getAlbum = id => get(`${URL}/${id}`);
export const postAlbum = album => post(URL, album);
export const getImages = id => get(`${URL}/${id}/images`);
export const postImage = (image, albumId) => post(`${URL}/${albumId}/images`, image);