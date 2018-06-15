import { getAllAlbums, postAlbum } from '../../services/api';
import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';

// const staticAlbums = [
//   {
//     id: 1,
//     title: 'Ryan Obermeyer',
//     description: 'Denatata by Ryan Obermeyer',
//     posterImage: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Dentata_Ryan_Obermeyer.jpg',
//   },
//   {
//     id: 2,
//     title: 'The Third & The Seventh',
//     description: 'Alex Roman\'s CGI art',
//     posterImage: 'http://www.artificialife.net/wp-content/uploads/2010/01/The-Third-The-Seventh-by-Alex-Roman_01.jpg'
//   },
//   {
//     id: 3,
//     title: 'Infinity Room',
//     description: 'Yayao Kusama',
//     posterImage: 'https://ago.ca/sites/default/files/styles/image_large/public/2017-10/E-08897.jpg?h=0b7a0c0c&itok=u576nARq'
//   },
//   {
//     id: 4,
//     title: 'Album 2',
//     description: 'album2 description',
//     posterImage: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Dentata_Ryan_Obermeyer.jpg',
//   },
//   {
//     id: 5,
//     title: 'Album 2',
//     description: 'album2 description',
//     posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
//   },
//   {
//     id: 6,
//     title: 'Album 2',
//     description: 'album2 description',
//     posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
//   },
//   {
//     id: 7,
//     title: 'Album 2',
//     description: 'album2 description',
//     posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
//   },
//   {
//     id: 8,
//     title: 'Album 2',
//     description: 'album2 description',
//     posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
//   },
//   {
//     id: 9,
//     title: 'Album 2',
//     description: 'album2 description',
//     posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
//   }
// ];

export const loadAlbums = () => dispatch => {
  getAllAlbums()
    .then(
      albums => {
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      },
      err => {
        console.log(err);
      }
    );
};

export function addAlbum(album) {
  return {
    type: ALBUM_ADD,
    payload: postAlbum(album)
      .then(deleted => deleted)
  };
}