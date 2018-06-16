import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

export default class Nav extends PureComponent {

  render() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/albums">Albums</Link></li>
          <li><Link to="/images">Images</Link></li>
        </ul>
      </nav>
    );
  }

}