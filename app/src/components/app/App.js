import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import PrivateRoute from './PrivateRoute';
import Home from '../home/Home';
import About from '../about/About';
import Images from '../images/Images';
import Albums from '../albums/Albums';
import Nav from '../nav/Nav';
import Auth from '../auth/Auth';
import styles from './App.css';
import AlbumDetail from '../albums/AlbumDetail';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {

    const { checkedAuth } = this.props;

    return (
      <Router>
        <div className={styles.app}>
          <h1>Albuminable</h1>
          <Nav/>
          <main>
            { checkedAuth &&
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute exact path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <PrivateRoute path="/images" component={Images}/>
              <PrivateRoute path="/albums/:id" render={({ match, location }) => <AlbumDetail location={location} id={match.params.id}/> }/>
              <Redirect to="/"/>
            </Switch>
            }
          </main>
          <footer>I am the footer</footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);