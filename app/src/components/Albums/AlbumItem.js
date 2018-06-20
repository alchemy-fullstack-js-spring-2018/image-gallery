import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getURL } from '../../services/images';
import { gallerySize } from '../images/actions';

export default class AlbumItem extends PureComponent {
  
  static propTypes = {
    album: PropTypes.object,
  };

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { album } = this.props;
    const options = gallerySize();
    
    return (
      <li>
        <Link to={`/albums/${album._id}`}>
          <div className="album-card">
            <img src={getURL(album.coverImage, options)} />
            <div className="album-hover">
              <h3>{album.title}</h3>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}