import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import Nav from './Nav';
import Home from './Home';
import Header from './Header';
import Auth from '../auth/Auth';
import Images from '../images/Images';

import Albums from '../albums/Albums';
import AlbumDetail from '../albums/AlbumDetail';
import NewAlbum from '../albums/NewAlbum';
import styles from './App.css';

class App extends Component {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Nav/>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>

              <Route exact path="/albums" component={Albums}/>
              <PrivateRoute exact path="/albums/new" component={NewAlbum}/>
              <Route path="/albums/:id" component={AlbumDetail} />
              <Route path="/auth" component={Auth}/>
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

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);