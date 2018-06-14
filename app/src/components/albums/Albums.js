import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAlbums } from './reducers';
import { loadAlbums } from './actions';
import PropTypes from 'prop-types';

export class Albums extends PureComponent {

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
      <div><h1>Album Component</h1>
        <ul>
          {albums.map((album, i) => <li key={i}>{album.title}</li>)}
        </ul>
      </div> //mockup basic display of albums. list of albums.
    );
  }
}

export default connect(
  state => ({ albums: getAlbums(state) }),
  { loadAlbums }
)(Albums);