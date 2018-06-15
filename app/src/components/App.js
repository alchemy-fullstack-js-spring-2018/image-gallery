import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Albums from './Albums/AlbumList';
import AlbumsForm from './Albums/AlbumsForm';
import About from './About';
import { loadAlbums, addAlbums } from './action';

export default class App extends Component {

    state = {};

    componentDidMount() {}

    render() {
      return (
        <Router>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/albums" component={Albums}/>
              <Route path="/albums/new" component={AlbumsForm}/>
              <Route path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </Router>
      );
    }
}