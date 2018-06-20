import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <header>
        <nav className={styles.navigation}>
          <ul>
            <li>{user ? `Welcome, ${user.username}!` : 'Welcome, please sign in!' }</li>
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
              { user 
                ? <Link to="/" onClick={this.handleLogout}>Logout</Link> 
                : <Link to="/auth">Login</Link> }
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);