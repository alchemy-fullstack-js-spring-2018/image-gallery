import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

export default class Nav extends Component {

  render() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li><NavLink exact to="/" activeClassName="current">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="current">About</NavLink></li>
          <li><NavLink to="/albums" activeClassName="current">Albums</NavLink></li>
          <li><NavLink to="/images" activeClassName="current">Images</NavLink></li>
        </ul>
      </nav>
    );
  }

}