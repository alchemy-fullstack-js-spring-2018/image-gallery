import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.css';

export default class Gallery extends PureComponent {

  static propTypes = {
    images: PropTypes.array
  };

  state = {
    currentIndex: 0
  };

  handleSwitch(increment) {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + increment }));
  }

  render() {

    const { currentIndex } = this.state;
    const { images } = this.props;
  
    return (
      <section className={styles.gallery}>
        <button onClick={() => this.handleSwitch(-1)} disabled={currentIndex === 0}>&#10094;</button>
        <img src={images[currentIndex].url} alt={images[currentIndex].description}/>
        <button onClick={() => this.handleSwitch(1)} disabled={currentIndex === images.length - 1}>&#10095;</button>
      </section>
    );
  }
}