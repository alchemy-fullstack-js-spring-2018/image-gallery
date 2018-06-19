import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';

export default class ImageGallery extends Component {

    static propTypes = {
      images: PropTypes.array,
    };

    render() {

      const { images } = this.props;

      return (
        <div>
          <ul>(
            {images.map(image => 
              <li key={image._id}>
                <img src={image.url} />
                <h4>{image.title}</h4>
              </li>
            )}
          </ul>      
        </div>
      );
    }
}