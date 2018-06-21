import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { Route, Link } from 'react-router-dom';

class Header extends Component {

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
      <header>
        <nav>
          {/* <Link to="/">Home</Link> */}
          &nbsp;
          {
            user
              ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
              : <Link to="/auth">Login</Link>
          }
        </nav>
        { user && <span>Welcome {user.name}!</span> }
      </header>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);