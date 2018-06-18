import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/albums">Albums</Link></li>
          <li><Link to="/images">All Images</Link></li>
          <li><Link to="/albums/new">Create a New Album</Link></li>
        </ul>
      </nav>
    );
  }
}
