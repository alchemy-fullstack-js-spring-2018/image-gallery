import React, { Component } from 'react';
import hero from './CssImages/flowers.jpg';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <section>
        <div className={styles.content}>
          <img src={hero}/>
          <h2><span>A Picture Says a Thousand Words</span></h2>
        </div>
      </section>
    );
  }
}