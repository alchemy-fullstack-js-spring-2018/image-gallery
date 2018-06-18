import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUrl } from '../../services/images';
import styles from './Thumbnails.css';

export default class Thumbnails extends PureComponent {

  static propTypes = {
    images: PropTypes.array
  };

  render() {

    const { images } = this.props;
  
    return (
      <ul className={styles.thumbnails}>
        <li><div className="new-image">+</div></li>
        {images.map(image => <li key={image._id}>
          <img src={getUrl(image.url, 'w_100')}/>
          <h4>{image.title}</h4>
        </li>)}
      </ul>
    );
  }
}