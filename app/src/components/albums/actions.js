import { getAllAlbums, postAlbum } from '../../services/api';
import { ALBUMS_LOAD, ALBUM_ADD } from './reducers';

const staticAlbums = [
  {
    id: 1,
    title: 'Ryan Obermeyer',
    description: 'Denatata by Ryan Obermeyer',
    posterImage: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Dentata_Ryan_Obermeyer.jpg',
  },
  {
    id: 2,
    title: 'The Third & The Seventh',
    description: 'Alex Roman\'s CGI art',
    posterImage: 'http://www.artificialife.net/wp-content/uploads/2010/01/The-Third-The-Seventh-by-Alex-Roman_01.jpg'
  },
  {
    id: 3,
    title: 'Infinity Room',
    description: 'Yayao Kusama',
    posterImage: 'https://ago.ca/sites/default/files/styles/image_large/public/2017-10/E-08897.jpg?h=0b7a0c0c&itok=u576nARq'
  },
  {
    id: 4,
    title: 'Guild Wars 2 Concept Art',
    description: 'By Daniel Damaciu',
    posterImage: 'http://danieldociu.weebly.com/uploads/1/3/0/0/13009351/496565_1_orig.jpg',
  },
  {
    id: 5,
    title: 'Generative Art',
    description: 'Processing Artwork',
    posterImage: 'https://i.pinimg.com/736x/ed/e2/c2/ede2c25114170dff6a8298a29a070ebb--generative-art-cg-art.jpg'
  },
  {
    id: 6,
    title: 'Album 2',
    description: 'album2 description',
    posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
  },
  {
    id: 7,
    title: 'Voyage',
    description: 'Photogarphy by Emily Albertson',
    posterImage: 'http://payload338.cargocollective.com/1/15/499597/9071167/Voyage-83_1896.jpg'
  },
  {
    id: 8,
    title: 'Album 2',
    description: 'album2 description',
    posterImage: 'https://thumb1.shutterstock.com/display_pic_with_logo/923585/117628360/stock-vector-a-old-wanted-posters-vector-wanted-poster-image-117628360.jpg'
  },
  {
    id: 9,
    title: 'Traditional Art',
    description: 'Art that defined an Age',
    posterImage: 'https://is2-ssl.mzstatic.com/image/thumb/Purple/45/1b/72/mzm.ullnfcki.png/246x0w.jpg'
  }
];

export function loadAlbums() {
  return {
    type: ALBUMS_LOAD,
    payload: staticAlbums || getAllAlbums()
  };
}

export function addAlbum(album) {
  return {
    type: ALBUM_ADD,
    payload: postAlbum(album)
      .then(deleted => deleted)
  };
}