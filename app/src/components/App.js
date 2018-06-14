import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Albums from './Albums';
import About from './About';
//import { getAlbums, addAlbums } from './action';

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
              <Route path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </Router>
      );
    }
}