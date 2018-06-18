import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getURL } from '../../services/images';
export default class ImageDetail extends Component {
  
  static propTypes = {
    image: PropTypes.object,
  }
  
  
  render() {

    const { image } = this.props;

    return (
      <div>
        <img src={getURL(image.url, 'c_thumb')}/>      
      </div>
    );
  }
}
