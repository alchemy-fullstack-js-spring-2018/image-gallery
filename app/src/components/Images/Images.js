import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import ImagesForm from './ImagesForm';
import { getImagesByAlbum } from '../reducers';
import { loadImages } from '../actions';
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

    return (
      <div>
        <Switch>
          <Route path="/albums/:albumId/images/new" component={ImagesForm}/>
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({ images: getImagesByAlbum(state) }),
  { loadImages }
)(Images);

