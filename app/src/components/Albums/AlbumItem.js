import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAblumById } from '../reducer';

class AlbumItem extends PureComponent {
  
  static propTypes = {
    album: PropTypes.object
  };

  render() {
    const { album } = this.props;
    
    return (
      <li>
        <Link to={`/album/${album._id}`}>album.title</Link>
      </li>
    );
  }
}

export default connect(
  (state, { id }) => ({
    album: getAblumById(state, id)
  }),
  null
)(AlbumItem);