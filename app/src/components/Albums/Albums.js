import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'; //eslint-disable-line
import AlbumsForm from './AlbumsForm';
import AlbumsList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import Images from '../Images/Images';
import PrivateRoute from '../App/PrivateRoute';

export default class Albums extends Component {
  
  render() {

    return (
      <div>
        <Switch>
          <PrivateRoute exact path="/albums" component={AlbumsList}/>
          <PrivateRoute path="/albums/new" component={AlbumsForm}/>
          <PrivateRoute exact path="/albums/:albumId" component={AlbumDetail}/>
          <PrivateRoute path="/albums/:albumId/images" component={Images}/>
          <Redirect to="/albums"/>
        </Switch>
      </div>
    );
  }
}

