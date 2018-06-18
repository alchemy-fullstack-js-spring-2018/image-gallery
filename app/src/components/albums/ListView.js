import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListView.css';

class ListView extends Component {

  static propTypes = {
    images: PropTypes.array
  };

  render() {

    const { images } = this.props;

    return (
      <div className={styles.listView}>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Url</th>
            </tr>
            {images.map(image => <tr key={image._id}>
              <td>{image.title}</td>
              <td>{image.description}</td>
              <td>{image.url}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListView;