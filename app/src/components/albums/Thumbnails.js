import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUrl } from '../../services/images';
import styles from './Thumbnails.css';
import AddImage from './AddImage';

export default class Thumbnails extends PureComponent {

  static propTypes = {
    images: PropTypes.array
  };

  state = {
    formOpen: false
  };

  handleFormToggle = () => {
    this.setState(prevState => ({ formOpen: !prevState.formOpen }));
  };

  render() {

    const { formOpen } = this.state;
    const { images } = this.props;
  
    return (
      <ul className={styles.thumbnails}>
        {formOpen ? <li><AddImage onDone={this.handleFormToggle}/></li> : <li><div className="new-image" onClick={this.handleFormToggle}>+</div></li>}
        {images.map(image => <li key={image._id}>
          <img src={getUrl(image.url, 'w_100')}/>
          <h4>{image.title}</h4>
        </li>)}
      </ul>
    );
  }
}