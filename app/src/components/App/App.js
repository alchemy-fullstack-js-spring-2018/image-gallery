import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCheckedAuth } from '../auth/reducers';
import { tryLoadUser } from '../auth/actions';
import hero from '../../assets/images/flowers.jpg';
import PrivateRoute from './PrivateRoute';
import Home from '../Home';
import Header from '../Nav';
import Albums from '../Albums/Albums';
import Auth from '../Auth/Auth';
import About from '../About';
import PropTypes from 'prop-types';

class App extends Component {

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
        <div>
          <Header/>
          <main>
            { checkedAuth && 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute path="/albums" component={Albums}/>
              <PrivateRoute path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
            }
            <img src={hero} />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);