import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAlbum, clearAlbum } from './actions';
import { getCurrentAlbum } from './reducers';

class AlbumDetail extends PureComponent {

  static propTypes = {
    loadAlbum: PropTypes.func.isRequired,
    clearAlbum: PropTypes.func.isRequired,
    album: PropTypes.object,
    id: PropTypes.string
  };

  componentDidMount() {
    this.props.loadAlbum(this.props.id);
  }

  componentWillUnmount() {
    this.props.clearAlbum();
  }

  render() {

    const { album } = this.props;

    if(!album) return null;

    const { title, description, images, _id } = album;
  
    return (
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <ul>
          <li><Link to={`/albums/${_id}/images/thumbnail`}>thumbnail view</Link></li>
          <li><Link to={`/albums/${_id}/images/gallery`}>gallery view</Link></li>
          <li><Link to={`/albums/${_id}/images/list`}>list view</Link></li>
        </ul>
        <Switch>
          <Route path={`/albums/${_id}/images/thumbnail`} render={() => (
            <ul>
              {images.map(image => <li key={image._id}><img src={image.url}/></li>)}
            </ul>)}/>
          <Route path="/albums/:id/images/gallery" />
          <Route path="/albums/:id/images/list" />
          <Redirect to={`/albums/${_id}/images/thumbnail`} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({
    album: getCurrentAlbum(state)
  }),
  { loadAlbum, clearAlbum }
)(AlbumDetail);