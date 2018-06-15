import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumsForm from './AlbumsForm';
import AlbumItem from './AlbumItem';
import { loadAlbums, addAlbums } from '../action';

export default class Albums extends Component {
    
    static propTypes = {
      albums: PropTypes.array,
      addAlbums: PropTypes.func.isRequired,
      loadAlbums: PropTypes.func.isRequired
    };


    conponentDidMount() {
      this.props.loadAlbums();
    }

    render() {
      const { albums, addAlbums } = this.props;
      if(!albums) return null;
  
      return (
        <div>
          <h2>Albums</h2>
          <Link to={'/albums/new'}>
            <button>Add New</button>
          </Link>
          <ul>
            {albums.map(album => <AlbumItem key={album.id} {...album}/>)}
          </ul>
        </div>
      );
    }

}
