import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCheckedAuth } from '../auth/reducers';
import { tryLoadUser } from '../auth/actions';
import PrivateRoute from './PrivateRoute';
import Home from '../App/Home';
import Header from '../App/Header';
import Albums from '../Albums/Albums';
import Auth from '../Auth/Auth';
import About from '../App/About';
import PropTypes from 'prop-types';
import './App.less';

class App extends Component {

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
        <div className="container">
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
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    checkedAuth: getCheckedAuth(state),
  }),
  { tryLoadUser }
)(App);