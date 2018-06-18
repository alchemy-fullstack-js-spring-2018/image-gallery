import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageItem extends Component {

    static propTypes = {
      images: PropTypes.object,
    };

    render() {

      const { images } = this.props;

      return (
        <li>
          <div>
            <img src={images.coverImage}/>
            <h3>{images.title}</h3>
            <p>{images.description}</p>
          </div>
        </li>
      );
    }
}