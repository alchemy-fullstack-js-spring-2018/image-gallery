import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Images from '../images/Images';
import Albums from '../albums/Albums';
import Nav from '../nav/Nav';
import styles from './App.css';
import AlbumDetail from '../albums/AlbumDetail';
// import Album from '../albums/Album';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <h1>Image Gallery!</h1>
          <Nav/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Route path="/images" component={Images}/>
              <Route path="/albums/:id" render={({ match }) => <AlbumDetail id={match.params.id}/> }/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer>I am the footer</footer>
        </div>
      </Router>
    );
  }
}