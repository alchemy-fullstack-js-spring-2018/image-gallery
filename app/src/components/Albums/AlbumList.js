import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadAlbums } from '../action';
import { getAlbumsList } from '../reducer';
import AlbumItem from './AlbumItem';
import { connect } from 'react-redux';

class AlbumList extends PureComponent {
    
    static propTypes = {
      albums: PropTypes.array,
      loadAlbums: PropTypes.func.isRequired
    };


    conponentDidMount() {
      this.props.loadAlbums();
    }

    render() {
      const { albums } = this.props;
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

export default connect(
  state => ({ albums: getAlbumsList(state) }),
  { loadAlbums }
)(AlbumList);
