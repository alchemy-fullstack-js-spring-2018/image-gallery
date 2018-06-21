import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAlbums } from './reducers';
import { loadAlbums } from './actions';
import styles from './Albums.css';
import Album from './Album';
import PropTypes from 'prop-types';

class Albums extends Component {

  static propTypes = {
    albums: PropTypes.array,
    loadAlbums: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;

    return (
      <Fragment>
        <h3>Albums</h3>
        <ul className={styles.albums}>
          {albums.map((album, i) => (
            <Album key={i} album={album}/>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ albums: getAlbums(state) }),
  { loadAlbums }
)(Albums);