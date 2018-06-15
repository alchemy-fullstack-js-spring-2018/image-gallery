import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Header from './Nav';
import Albums from './Albums/Albums';
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
              <Route exact path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}