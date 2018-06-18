import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Thumbnails from '../albums/Thumbnails';
import styles from './Images.css';

export default class Images extends PureComponent {
  
  static propTypes = {
    images: PropTypes.array
  };

  render() {
    const { images } = this.props;

    if(!images) return null;

    return (
      <div className={styles.thumbnails}>
        <Thumbnails/>
      </div>
    );
  }
}