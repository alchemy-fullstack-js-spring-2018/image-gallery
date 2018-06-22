import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Home from '../HomePage/Home';
import Header from '../Navigation/Nav';
import Albums from '../Albums/Albums';
import About from '../AboutPage/About';
import PrivateRoute from './PrivateRoute';
import Auth from '../auth/Auth';
import styles from './App.css';

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
        <main className={styles.app}>
          <Header/>
          <div>
            { checkedAuth && 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
            }
          </div>
        </main>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);