import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './Album.css';
import PropTypes from 'prop-types';

export default class Album extends Component {

  static propTypes = {
    album: PropTypes.object.isRequired
  };


  render() {
    const { album } = this.props;
    const { _id, title, description, posterImage } = album;

    return (
      <Fragment>
        <li className={styles.album}>
          <Link to={`/albums/${_id}`}>
            <img className="posterimage" src={posterImage}/>
            <h2>{title}</h2>
            <p className="album-description">{description}</p>
          </Link>
        </li>
      </Fragment>
    );
  }
}