import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addImage } from './actions';
import { getImagesByAlbum } from './reducers';

const defaultState = {
  title: '',
  description: '',
  url: ''
};

class NewImage extends PureComponent {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    addImage: PropTypes.func.isRequired
  };

  state= {
    edit: defaultState
  };

  handleChange = ({ target }) => {
    this.setState(({ edit }) => {
      return {
        edit: {
          ...edit,
          [target.name]: target.value
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addImage(this.state.edit, this.props.albumId);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {
    const { title, description, url } = this.state.edit;

    return (
      <div>NewImage Component
        <form onSubmit={this.handleSubmit}>
          <label>
      Title:
            <input name="title" value={title} onChange={this.handleChange} required/>
          </label>
          <label>
      Description:
            <input name="description" value={description} onChange={this.handleChange} required/>
          </label>
          <label>
      URL:
            <input name="url" value={url} onChange={this.handleChange} required/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({ images: getImagesByAlbum(state) }),
  { addImage }
)(NewImage);