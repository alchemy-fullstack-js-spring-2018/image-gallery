import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadAlbums, addAlbum } from './actions';
import { getAlbumsList } from './reducers';
import AlbumItem from './AlbumItem';
import { connect } from 'react-redux';

class AlbumList extends Component {
    
    static propTypes = {
      albums: PropTypes.array,
      loadAlbums: PropTypes.func.isRequired,
      addAlbum: PropTypes.func
    };

    componentDidMount(){
      this.props.loadAlbums();
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
            {albums ? albums.map((album, i) => <AlbumItem key={i} album={album}/>) : null}
          </ul>
        </div>
      );
    }
}

export default connect(
  state => ({ albums: getAlbumsList(state) }),
  { loadAlbums, addAlbum }
)(AlbumList);
