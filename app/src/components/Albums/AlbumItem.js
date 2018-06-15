import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAlbumById } from '../reducer';

class AlbumItem extends PureComponent {
  
  static propTypes = {
    album: PropTypes.object
  };

  render() {
    const { album } = this.props;
    
    return (
      <li>
        <div>
          <img src={album.coverImage}/>
          <Link to={`/album/${album._id}`}>{album.title}</Link>
          <p>{album.description}</p>
        </div>
      </li>
    );
  }
}

export default connect(
  (state, { id }) => ({
    album: getAlbumById(state, id)
  }),
  null
)(AlbumItem);