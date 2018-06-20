import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { Link } from 'react-router-dom';

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
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/albums">Albums</Link></li>
          <li><Link to="/images">All Images</Link></li>
          <li><Link to="/albums/new">Create a New Album</Link></li>
          {
            user
              ? <li><Link to="/" onClick={this.handleLogout}>Logout</Link></li>
              : <li><Link to="/auth">Login</Link></li>
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