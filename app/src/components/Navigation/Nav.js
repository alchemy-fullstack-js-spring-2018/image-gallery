import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../auth/reducers';
import { logout } from '../auth/actions';
import styles from './Nav.css';

class Nav extends Component {
  
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {

    const { user } = this.props;

    return (
      <header>
        <nav className={styles.navigation}>
          <ul>
            <li>Some Words</li>
            <li id='home'>
              <Link to="/">Home</Link>
            </li>
            <li id='albums'>
              <Link to="/albums">Albums</Link>
            </li>
            <li id='about'>
              <Link to="/about">About</Link>
            </li>
            <li>
              {
                user
                  ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
                  : <Link to="/auth">Login</Link>
              }
            </li>
          </ul>
        </nav>
        { user && <span>Welcome {user.name}!</span> }
      </header>
    );
  }
}

export default connect(
  state => ({ user: getUsers(state) }),
  { logout }
)(Nav);