import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import ImagesForm from './ImagesForm';
import ImageThumbnail from './ImageThumbnail';
import ImageGallery from './ImageGallery';
import ImageList from './ImageList';
import { getImagesByAlbum } from './reducers';
import { loadImages } from './actions';
import PropTypes from 'prop-types';

class Images extends Component {
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    images: PropTypes.array,
    loadImages: PropTypes.func.isRequired,
  };

  state = {
    albumId: this.props.match.params.albumId,
  }

  componentDidMount() {
    this.props.loadImages(this.state.albumId);
  }

  render() {

    const { images } = this.props;

    return (
      <div>
        <Switch>
          <Route path="/albums/:albumId/images/new" component={ImagesForm}/>
          <Route path="/albums/:albumId/images/thumbnail" render={() => <ImageThumbnail images={images} />}/>
          <Route path="/albums/:albumId/images/gallery" render={() => <ImageGallery images={images} />}/>
          <Route path="/albums/:albumId/images/list" render={() => <ImageList images={images} />}/> 
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({ images: getImagesByAlbum(state) }),
  { loadImages }
)(Images);

