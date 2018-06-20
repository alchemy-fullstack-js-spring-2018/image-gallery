import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import { connect } from 'react-redux';

import Nav from './Nav';
import Home from './Home';
import Header from './Header';
import Images from '../images/Images';
import Auth from '../auth/Auth';

import Albums from '../albums/Albums';
import AlbumDetail from '../albums/AlbumDetail';
import NewAlbum from '../albums/NewAlbum';

class App extends PureComponent {
  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;
    
    return (
      <Router>
        <div className="app">
          <Nav/>
          <Header/>
          <main>
            { checkedAuth &&
            <Switch>
              <Route exact path="/" component={Home}/>

              <Route exact path="/albums" component={Albums}/>
              <PrivateRoute exact path="/albums/new" component={NewAlbum}/>
              <PrivateRoute path="/albums/:id" component={AlbumDetail} />

              <Route exact path="/images" component={Images}/>
              <Route path="/auth" component={Auth}/>
              <Redirect to="/"/>
            </Switch>
            }
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