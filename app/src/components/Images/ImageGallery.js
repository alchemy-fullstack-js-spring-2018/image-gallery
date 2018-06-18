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
          <ul>
            {images ? images.map((image, i) => <ImageItem key={i} image={image}/>) : null}
          </ul>    
        </div>
      );
    }
}