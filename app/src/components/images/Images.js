import React, { PureComponent } from 'react';
import styles from './Images.css';

export default class Images extends PureComponent {

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