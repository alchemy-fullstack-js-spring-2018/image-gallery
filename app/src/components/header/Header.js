import React, { PureComponent } from 'react';
import './Header.css';

export default class Header extends PureComponent {


  render() {

    return (
      <div className = "Header">
        <label>
                Login!
        </label>
        <button type="submit">Login</button>
      </div>
    );
  }
}