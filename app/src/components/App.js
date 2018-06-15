import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Header from './Nav';
import AlbumList from './Albums/AlbumList';
import AlbumsForm from './Albums/AlbumsForm';
import About from './About';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/albums" component={AlbumList}/>
              <Route path="/albums/new" component={AlbumsForm}/>
              <Route path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}