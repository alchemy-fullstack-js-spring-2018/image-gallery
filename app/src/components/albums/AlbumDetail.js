import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
import { getCurrentAlbum } from './reducers';

class AlbumDetail extends PureComponent {

  static propTypes = {
    loadAlbum: PropTypes.func.isRequired,
    album: PropTypes.object,
    id: PropTypes.string
  };

  componentDidMount() {
    this.props.loadAlbum(this.props.id);
  }

  render() {

    const { album } = this.props;

    if(!album) return null;

    const { title, description, images } = album;
  
    return (
      <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <ul>
          {images.map(image => <li key={image._id}><img src={image.url}/></li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    album: getCurrentAlbum(state)
  }),
  { loadAlbum }
)(AlbumDetail);