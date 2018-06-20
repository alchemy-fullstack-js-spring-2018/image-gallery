import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import PropTypes from 'prop-types';
import PrivateRoute from '../app/PrivateRoute';

import ImageThumbnails from '../albums/ImageThumbnails';
import ImageList from '../albums/ImageList';
import ImageGallery from '../albums/ImageGallery';
import NewImage from '../albums/NewImage';

class Album extends Component {
  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    return (
      <div>
        <h3>Album Title</h3>
      
        <ul>
          <li><Link to="/albums/:id/images/thumbnail">Thumbnails</Link></li>
          <li><Link to="/albums/:id/images/list">List</Link></li>
          <li><Link to="/albums/:id/images/gallery">Gallery</Link></li>
          <li><Link to="/albums/:id/images/new">Add an Image to this Album</Link></li>
        </ul>

        <Switch>
          <Route path="/albums/:id/images/thumbnail" render={({ match }) => {return <ImageThumbnails albumId={match.params.id} />;}}/>
          <Route path="/albums/:id/images/list" render={() => {return <ImageList />;}}/>
          <Route path="/albums/:id/images/gallery" render={() => {return <ImageGallery />;}}/>
          <PrivateRoute path="/albums/:id/images/new" render={({ match }) => {return <NewImage albumId={match.params.id}/>;}}/>
          <Redirect to="/albums/:id/images/thumbnail"/>
        </Switch>

      </div>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(Album);