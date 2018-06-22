import React, { Component } from 'react';
import styles from './About.css';
import pic1 from '../CssImages/deer-woman.jpg';
import pic2 from '../CssImages/goat.jpg';

export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <div id='about1'>
          <img src={pic1} />
          <h2>Jen Lipton</h2>
          <p>{'Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. La- da- da- da- dah. Just be happy. Even the worst thing we can do here is good. Nothing\'s gonna make your husband or wife madder than coming home and having a snow-covered dinner. There\'s not a thing in the world wrong with washing your brush.'}</p>
        </div>
        <div id='about2'>
          <img src={pic2} />
          <h2>Tasha Zuniga</h2>
          <p>{'But we\'re not there yet, so we don\'t need to worry about it. Didn\'t you know you had that much power? You can move mountains. You can do anything. Even the worst thing we can do here is good. It is a lot of fun.'}</p>
        </div>
      </div>



    );
  }
}