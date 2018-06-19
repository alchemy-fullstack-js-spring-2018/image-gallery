import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import styles from './Nav.css';

class Nav extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {

    const { user } = this.props;

    return (
      <nav className={styles.nav}>
        <ul>
          <li><NavLink exact to="/" activeClassName="current">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="current">About</NavLink></li>
          <li><NavLink to="/albums" activeClassName="current">Albums</NavLink></li>
          <li><NavLink to="/images" activeClassName="current">Images</NavLink></li>
          {
            user
              ? <li><NavLink to="/" onClick={this.handleLogout}>Logout</NavLink></li>
              : <li><NavLink to="/auth" >Login</NavLink></li>
          }
        </ul>
      </nav>
    );
  }

}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Nav);