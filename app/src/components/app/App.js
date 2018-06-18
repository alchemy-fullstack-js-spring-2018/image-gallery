import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Header from './Header';
import Images from '../images/Images';

import Albums from '../albums/Albums';
import AlbumDetail from '../albums/AlbumDetail';
import NewAlbum from '../albums/NewAlbum';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav/>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>

              <Route exact path="/albums" component={Albums}/>
              <Route exact path="/albums/new" component={NewAlbum}/>
              <Route path="/albums/:id" component={AlbumDetail} />

              <Route exact path="/images" component={Images}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer>
            <h3>{'Footer'}</h3>
          </footer>
        </div>
      </Router>
    );
  }
}

