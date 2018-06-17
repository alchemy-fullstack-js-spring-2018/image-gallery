import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Albums from '../albums/Albums';
import About from '../about/About';
import Images from '../images/Images';
import AlbumDetail from '../albums/AlbumDetail';
import NewAlbum from '../albums/NewAlbum';
import './App.css';

export default class App extends PureComponent {
  render() {

    return (
      <Router>
        <div className = "grid-class">
          <img src={require('../../assets/Logo2.png')} id="logo"/><header className="header"></header>
          
          <nav className = "nav-bar">
            <ul>
              <li><a>Albums</a></li>
              <li><Link to="/albums/new">Add Albums</Link></li>
              <li><a>Images</a></li>
              <li><a>About</a></li>
            </ul>
          </nav>
          <main className = "main-area">
            Main
            {<Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/about" component={About}/>
              <Route exact path="/albums" component={Albums}/>
              <Route path="/albums/new" component={NewAlbum}/>
              <Route path="/albums/:id" component={AlbumDetail}/>
              <Route path="/albums/:id/images/thumbnail" component={AlbumDetail}/>
              <Route path="/albums/:id/images/gallery" component={AlbumDetail}/>
              <Route path="/albums/:id/images/list" component={AlbumDetail}/>
              <Route path="/albums/:id/images/new" component={AlbumDetail}/>
              <Route path="/images" component={Images}/>
              <Redirect to="/"/>
            </Switch>}
          </main>
          <footer className = "foot">footer</footer>
        </div>
      </Router>
    );
  }

}