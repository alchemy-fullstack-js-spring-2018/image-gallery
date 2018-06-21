import React, { Component, Fragment } from 'react';
import { getImages } from './reducers';
import { loadImages } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ImageList.css';

class ImageList extends Component {

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
        <h3>Image Details</h3>
        <div className={styles.imagelist}>
          <div><h4 className="title-header">Title</h4></div>
          <div><h4 className="description-header">Description</h4></div>
          <div><h4 className="url-header">URL</h4></div>
          {images.map((image, i) => (
            <Fragment  key={i}>
              <div><h4 className="title">{image.title}</h4></div>
              <div><span className="description">{image.description}</span></div>
              <div><span className="url">{image.url}</span></div>
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { loadImages }
)(ImageList);
