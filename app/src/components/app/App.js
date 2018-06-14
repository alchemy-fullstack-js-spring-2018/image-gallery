import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Images from '../images/Images';
import Albums from '../albums/Albums';
import Nav from '../nav/Nav';
// import Album from '../albums/Album';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <h1>Image Gallery!</h1>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/about" component={About}/>
            <Route path="/images" component={Images}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}