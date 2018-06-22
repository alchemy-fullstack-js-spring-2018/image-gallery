import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getURL } from '../../services/images';

export default class ImageDetail extends Component {
  
  static propTypes = {
    images: PropTypes.array.isRequired,
  }

  render() {

    const { images } = this.props;

    return (
      <div>
        <ul>(
          {images.map(image => 
            <li key={image._id}>
              <img src={getURL(image.url, 'w_300')} />
              <h4>{image.title}</h4>
            </li>
          )}
        </ul>  
      </div>
    );
  }
}
