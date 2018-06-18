import React, { PureComponent } from 'react';
import './About.css';

export default class About extends PureComponent {

  render() {

    return (
      <div className = "About">
        <h1>An Art Collection</h1>
        <p>This image gallery is a collection of crowdsourced art, users are allowed to share art on the site by adding it in our new image route. Feel free to display images that you like with attribution or share some of your own personal work.</p>
        <p id ="authors">
        Our team used React and Redux to construct this site, and styled each component using CSS-Grid.
        </p>

      </div>
    );
  }
}