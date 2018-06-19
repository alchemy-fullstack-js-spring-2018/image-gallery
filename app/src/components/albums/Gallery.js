import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImagesByAlbum } from './reducers';
import { loadImages } from './actions';

class Gallery extends PureComponent {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    loadImages: PropTypes.func.isRequired,
    images: PropTypes.array
  };

  componentDidMount() {
    this.props.loadImages(this.props.albumId);
  }

  render() {
    return (<div>Gallery</div>);
  }

}

export default connect(
  state => ({ images: getImagesByAlbum(state) }),
  { loadImages }
)(Gallery);