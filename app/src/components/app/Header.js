import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default class Header extends Component {
  
  render() {
    return (
      <header>
        <nav className={styles.navigation}>
          <ul>
            <li>Some Words</li>
            <li id='home'>
              <Link to="/">Home</Link>
            </li>
            <li id='albums'>
              <Link to="/albums">Albums</Link>
            </li>
            <li id='about'>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}