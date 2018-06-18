import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import ImagesForm from './ImagesForm';
import ImageThumbnail from './ImageThumbnail';
import ImageGallery from './ImageGallery';
import ImageList from './ImageList';
import { getImagesByAlbum } from '../reducers';

class Images extends Component {
  
  static proptypes = {
    images: PropTypes.array,
  };

  render() {

    return (
      <div>
        <Switch>
          <Route path="/albums/:albumId/images/new" component={ImagesForm}/>
          <Route path="/albums/:albumId/images/thumbnail" component={ImageThumbnail}/>
          <Route path="/albums/:albumId/images/gallery" component={ImageGallery}/>
          <Route path="/albums/:albumId/images/list" component={ImageList}/> 
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({ images: getImagesByAlbum(state) }),
  null
)(Images);

