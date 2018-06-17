import React, { PureComponent } from 'react';
import styles from './About.css';

export default class About extends PureComponent {

  render() {
    return (
      <div className={styles.about}>
        <p>Steele and Keli made this using React and Redux.</p>
        <p>Keli gave it a terrible name &ndash; it rhymes with &ldquo;abominable&rdquo; &ndash; to give them something to write about in the About page.</p>
      </div>
    );
  }

}