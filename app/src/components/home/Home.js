import React, { PureComponent } from 'react';
import styles from './Home.css';

export default class Home extends PureComponent {

  render() {
    return (
      <div className={styles.home}>
        <p>Save images from the internet, and organize them into albums.</p>
      </div>
    );
  }

}