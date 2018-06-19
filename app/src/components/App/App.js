import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import hero from '../CssImages/flowers.jpg';
import Home from '../HomePage/Home';
import Header from '../Navigation/Nav';
import Albums from '../Albums/Albums';
import About from '../AboutPage/About';
import PrivateRoute from './PrivateRoute';
import Auth from '../auth/Auth';

class App extends Component {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser;
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