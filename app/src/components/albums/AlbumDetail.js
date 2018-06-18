import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getAlbum } from '../../services/api';

export default class AlbumDetail extends PureComponent {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    album: PropTypes.object
  };

  state = {
    title: null,
    description: null,
    posterImage: null
  };

  componentDidMount() {
    if(!this.props.album) {
      getAlbum(this.props.albumId)
        .then(album => this.setState({ title: album.title, description: album.description, posterImage: album.posterImage }));
    }
  }

  render() {
    const { title, description, posterImage } = this.state;

    if(!this.state.title) return (<h1>Bad Album ID</h1>);

    return (
      <div>
        {title} <br/>
        <img src={posterImage}/> <br/>
        {description}
      </div>
    );
  }
}