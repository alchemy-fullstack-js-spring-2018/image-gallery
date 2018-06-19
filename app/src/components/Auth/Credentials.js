import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Credentials.css';

export default class Credentials extends PureComponent {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    allowName: PropTypes.bool
  };

  state = {
    username: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    const { action, allowName = false } = this.props;
    const { username, email, password } = this.state;

    return (
      <form className={styles.credentials} onSubmit={this.handleSubmit}>
        { allowName && 
          <div>
            <label>Username</label>
            <input name="username" value={username} onChange={this.handleChange}/>
          </div>
        }
        <div>
          <label>Email</label>
          <input name="email" value={email} onChange={this.handleChange}/>
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password"
            value={password} onChange={this.handleChange}/>
        </div>
        
        <div>
          <label>{action}</label>
          <button>{action}</button>
        </div>
      </form>
    );
  }
}