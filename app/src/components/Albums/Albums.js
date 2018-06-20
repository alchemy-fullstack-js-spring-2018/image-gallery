import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import AlbumsForm from './AlbumsForm';
import AlbumsList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import Images from '../Images/Images';
import './Albums.less';

export default class Albums extends Component {
  
  render() {

    return (
      <Switch>
        <Route exact path="/albums" component={AlbumsList}/>
        <Route path="/albums/new" component={AlbumsForm}/>
        <Route exact path="/albums/:albumId" component={AlbumDetail}/>
        <Route path="/albums/:albumId/images" component={Images}/>
        <Redirect to="/albums"/>
      </Switch>
    );
  }
}

