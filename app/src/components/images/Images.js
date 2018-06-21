import React, { Component, Fragment } from 'react';
import Thumbnail from '../albums/Thumbnail';
import { connect } from 'react-redux';
import { getImagesAll } from '../albums/reducers';
import { loadAllImages } from '../albums/actions';
import styles from '../albums/ImageThumbnails.css';
import PropTypes from 'prop-types';

class Images extends Component {

  static propTypes = {
    imagesAll: PropTypes.array,
    loadAllImages: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadAllImages();
  }

  render() {
    const { imagesAll } = this.props;

    return (
      <Fragment>
        <h3>Images</h3>
        <ul className={styles.thumbnails}>
          {imagesAll.map((image, i) => (
            <Thumbnail key={i} image={image}/>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ imagesAll: getImagesAll(state) }),
  { loadAllImages }
)(Images);