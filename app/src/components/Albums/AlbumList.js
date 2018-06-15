import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadAlbums, addAlbums } from '../action';
import { getAlbumsList } from '../reducer';
import AlbumItem from './AlbumItem';
import AlbumsForm from './AlbumsForm';
import { connect } from 'react-redux';

class AlbumList extends Component {
    
    static propTypes = {
      albums: PropTypes.array,
      loadAlbums: PropTypes.func.isRequired,
      addAlbums: PropTypes.func
    };

    componentDidMount(){
      this.props.loadAlbums();
    }

    handleAdd = album => {
      this.props.addAlbums(album);
    }

    render() {
      const { albums } = this.props;
  
      return (
        <div>
          <h2>Albums</h2>
          <Link to={'/albums/new'}>
            <button>Add New</button>
          </Link>
          <ul>
            {albums ? albums.map(album => <AlbumItem key={album.id} {...album}/>) : null}
          </ul>
          <AlbumsForm onAdd={this.handleAdd}/>
        </div>
      );
    }
}

export default connect(
  state => ({ albums: getAlbumsList(state) }),
  { loadAlbums, addAlbums }
)(AlbumList);
