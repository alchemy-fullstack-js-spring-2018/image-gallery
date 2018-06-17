import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAlbum, clearAlbum } from './actions';
import { getCurrentAlbum } from './reducers';
import { getUrl } from '../../services/images';
import styles from './AlbumDetail.css';

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
      <div className={styles['album-detail']}>
        <ul className="sub-nav">
          <li><NavLink to={`/albums/${_id}/images/thumbnail`} activeClassName="current-sub">thumbnail view</NavLink></li>
          <li><NavLink to={`/albums/${_id}/images/gallery`} activeClassName="current-sub">gallery view</NavLink></li>
          <li><NavLink to={`/albums/${_id}/images/list`} activeClassName="current-sub">list view</NavLink></li>
        </ul>
        <div className="album-display">
          <div className="album-info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <section className="images">
            <Switch>
              <Route path={`/albums/${_id}/images/thumbnail`} render={() => (
                <ul className="thumbnails">
                  {images.map(image => <li key={image._id}>
                    <img src={getUrl(image.url, 'w_100')}/>
                    <h4>{image.title}</h4>
                  </li>)}
                </ul>)}/>
              <Route path="/albums/:id/images/gallery" />
              <Route path="/albums/:id/images/list" />
              <Redirect to={`/albums/${_id}/images/thumbnail`} />
            </Switch>
          </section>
        </div>
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