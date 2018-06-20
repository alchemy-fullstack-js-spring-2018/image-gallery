import React, { Component } from 'react';
import styles from './Thumbnail.css';
import PropTypes from 'prop-types';

export default class Thumbnail extends Component {

  static propTypes = {
    image: PropTypes.object.isRequired
  };
  
  render() {
    const { image } = this.props;

    const { title, description, url } = image;

    return (
      <li className={styles.thumbnail}>
        <img className="thumbnail-image" src={url}/>
        <h2>{title}</h2>
        <p className="image-description">{description}</p>
      </li>
    );
  }
}