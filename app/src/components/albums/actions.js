import { getAllAlbums } from '../../services/api';
import { ALBUMS_LOAD } from './reducers';

const staticAlbums = [
  {
    id: 1,
    title: 'Album 1',
    description: 'album1 description',
    posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
  },
  {
    id: 2,
    title: 'Album 2',
    description: 'album2 description',
    posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
  },
  {
    id: 3,
    title: 'Album 2',
    description: 'album2 description',
    posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
  }
];

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: staticAlbums || getAllAlbums()
  };
}