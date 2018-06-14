import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../albums/Albums';
import About from '../about/About';
import Images from '../images/Images';

export default class App extends PureComponent {
  render() {

    return (
      <Router>
        <div>
          <header>IMAGES!</header>
          <nav></nav>
          <main>
            {<Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Route path="/images" component={Images}/>
              <Redirect to="/"/>
            </Switch>}
          </main>
          <footer></footer>
        </div>
      </Router>
    );
  }

}