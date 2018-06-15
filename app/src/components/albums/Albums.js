import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAlbums } from './reducers';
import { loadAlbums } from './actions';

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
      <div>
        <ul>
          {albums.map(album => <li key={album._id}>{album.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    albums: getAlbums(state)
  }),
  { loadAlbums }
)(Albums);