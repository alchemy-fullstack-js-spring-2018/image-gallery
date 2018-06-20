import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addImage } from './actions';
import { getCurrentAlbumId } from './reducers';
import styles from './AddImage.css';

class AddImage extends PureComponent {
  static propTypes = {
    albumId: PropTypes.string.isRequired,
    onDone: PropTypes.func.isRequired,
    addImage: PropTypes.func.isRequired
  };

  state = {
    title: '',
    description: '',
    url: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addImage(this.props.albumId, this.state);
    this.props.onDone();
  };

  render() {
    const { title, description, url } = this.state;
    const { onDone } = this.props;

    return (
      <form className={styles['add-image']} onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="title"/>
        <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="description"/>
        <input type="text" name="url" value={url} onChange={this.handleChange} placeholder="url"/>
        <button type="submit">ADD IMAGE</button>
        <button type="button" onClick={onDone}>cancel</button>
      </form>
    );
  }
}

export default connect(
  state => ({
    albumId: getCurrentAlbumId(state)
  }),
  { addImage }
)(AddImage);