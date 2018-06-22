import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import AlbumsList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import Images from '../Images/Images';

export default class Albums extends Component {
  
  render() {

    return (
      <Switch>
        <Route exact path="/albums" component={AlbumsList}/>
        <Route path="/albums/new" component={AlbumsList}/>
        <Route exact path="/albums/:albumId" component={AlbumDetail}/>
        <Route path="/albums/:albumId/images" component={Images}/>
        <Redirect to="/albums"/>
      </Switch>
    );
  }
}

