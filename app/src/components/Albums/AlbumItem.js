import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumItem extends Component {
  
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.any,
  };

  render() {
    const { id, title, image } = this.props;
    
    return (
      <li>
        <Link to={`/album/${id}`}>
          <h2>{title}</h2>
          <img src={image}/>
        </Link>
      </li>
    );
  }
}