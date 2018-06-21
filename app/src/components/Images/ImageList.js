import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ImageGallery extends Component {

    static propTypes = {
      images: PropTypes.array,
    };

    render() {

      const { images } = this.props;

      return (
        <div>
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