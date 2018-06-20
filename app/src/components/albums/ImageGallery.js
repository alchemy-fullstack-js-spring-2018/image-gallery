import React, { Component, Fragment } from 'react';

export default class ImageGallery extends Component {

  
  render() {
    return (
      <Fragment>
        <h2>Album Title</h2>
        <h3>Gallery View</h3>
        <img src="http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg" />
        <p>Description</p>
      </Fragment>
    );
  }
}