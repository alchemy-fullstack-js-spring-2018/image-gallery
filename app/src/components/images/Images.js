import React, { Component } from 'react';
import styles from './Images.css';

export default class Images extends Component {

  render() {
    return (
      <div className={styles.images}>
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
        <div className="image-placeholder"></div>
      </div>
    );
  }

}