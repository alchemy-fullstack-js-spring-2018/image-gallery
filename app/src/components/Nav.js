import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { styles } from './Nav.css';

export default class Nav extends Component {
  
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}