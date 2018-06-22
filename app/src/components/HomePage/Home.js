import React, { Component } from 'react';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <section className={styles.content}>
        <div>
          <h2>A Picture Says a Thousand Words</h2>
          <p>What will they say about you?</p>
        </div>
      </section>
    );
  }
}