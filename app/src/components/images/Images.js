import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../albums/reducers';
import { loadAllImages } from '../albums/actions';
import PropTypes from 'prop-types';
import styles from './Images.css';

class Images extends Component {

  static propTypes = {
    images: PropTypes.array,
    loadAllImages: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadAllImages();
  }

  render() {
    const { images } = this.props;

    return (
      <Fragment>
        <h3>Images</h3>
        <ul className={styles.imageUl}>
          {images.map((image, i) => (
            <li className={styles.imageLi} key={i}>
              <img className="posterimage" src={image.url}/>
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { loadAllImages }
)(Images);