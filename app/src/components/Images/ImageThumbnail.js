import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getURL } from '../../services/images';
import ImageItem from './ImageItem';

export default class ImageDetail extends Component {
  
  static propTypes = {
    images: PropTypes.array,
  }
  
  
  render() {

    const { images } = this.props;

    return (
      <div>
        <ul>
          {images ? images.map((images, i) => <ImageItem key={i} images={images}/>) : null}
          <img src={getURL(images.url, 'c_thumb')}/>      
        </ul>  
      </div>
    );
  }
}
