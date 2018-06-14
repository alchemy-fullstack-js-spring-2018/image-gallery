import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../albums/Albums';
import About from '../about/About';
import Images from '../images/Images';
import AlbumDetail from '../albums/AlbumDetail';
import NewAlbum from '../albums/NewAlbum';

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
              <Route path="/about" component={About}/>
              <Route path="/albums" component={Albums}/>
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
          <footer></footer>
        </div>
      </Router>
    );
  }

}