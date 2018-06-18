import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImagesByAlbum } from './reducers';
import { loadImages } from './actions';
import { getUrl } from '../../services/images';

class ImagesThumbnail extends PureComponent {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    loadImages: PropTypes.func.isRequired,
    images: PropTypes.array
  };

  componentDidMount() {
    this.props.loadImages(this.props.albumId);
  }

  render() {
    const { images } = this.props;
    return (
      <div>
        <ul>
          {images.map(image => <li key={image._id}>
            <img src={getUrl(image.url)}/>
            {image.title}
          </li>
          )}
        </ul>
      </div>
    );
  }

}

export default connect(
  state => ({ images: getImagesByAlbum(state) }),
  { loadImages }
)(ImagesThumbnail);

// {categories.map(category => <Categories
//   key={category.id}
//   onRemove={removeCategory}
//   category={category} 
//   onUpdate={updateCategory}
// />)}