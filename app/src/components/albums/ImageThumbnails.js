import React, { Component, Fragment } from 'react';
import Thumbnail from './Thumbnail';
import styles from './ImageThumbnails.css';
import { getImages } from './reducers';
import { loadImages } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ImageThumbnails extends Component {

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
        <h3>Thumbnail View</h3>
        <ul className={styles.thumbnails}>
          {images.map((image, i) => (
            <Thumbnail key={i} image={image}/>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { loadImages }
)(ImageThumbnails);
