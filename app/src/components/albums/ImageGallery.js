import React, { Component, Fragment } from 'react';
import { getImages } from './reducers';
import { loadImages } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ImageGallery extends Component {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    images: PropTypes.array,
    loadImages: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    this.props.loadImages(this.props.albumId);
  }
  
  render() {
    const { images } = this.props;

    return (
      <Fragment>
        <h2>Album Title</h2>
        <h3>Gallery View</h3>
        {images.map((image, i) => (
          <Fragment  key={i}>
            <h4 className="title">{image.title}</h4>
            <img src={image.url} className="url" />
            <span className="description">{image.description}</span>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { loadImages }
)(ImageGallery);