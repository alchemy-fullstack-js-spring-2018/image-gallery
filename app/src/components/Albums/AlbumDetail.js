import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showAlbum } from '../actions';
import { getAlbumById } from '../reducers';
import { Link } from 'react-router-dom';

class AlbumDetail extends PureComponent {
  
    static propTypes = {
      match: PropTypes.object.isRequired,
      showAlbum: PropTypes.func.isRequired,
      albumObject: PropTypes.object
    };

    state = {
      albumId: this.props.match.params.albumId,
    }

    componentDidMount(){
      this.props.showAlbum(this.state.albumId);
    }

    render() {    
      const { albumObject } = this.props;
      const { albumId } = this.state;
      const album = albumObject[albumId];

      return !album ? (<p> Loading! </p>) : (
        <div>
          <img src={album.coverImage}/>
          <p> Title: {album.title} </p>
          <p> Description: {album.description} </p>
          <Link to={`/albums/${album._id}/images/thumbnail`}>
            <button>Thumbnail View</button>
          </Link>
          <Link to={`/albums/${album._id}/images/gallery`}>
            <button>Gallery View</button>
          </Link>
          <Link to={`/albums/${album._id}/images/list`}>
            <button>List View</button>
          </Link>
          <Link to={`/albums/${album._id}/images/new`}>
            <button>Add Images</button>
          </Link>
        </div>
      );
    }
}

export default connect(
  state => ({ 
    albumObject: getAlbumById(state) 
  }),
  { showAlbum }
)(AlbumDetail);