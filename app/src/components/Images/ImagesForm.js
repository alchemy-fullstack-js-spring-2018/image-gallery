import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addImage } from '../actions';
import { connect } from 'react-redux';

const defaultState = {
  title: '',
  description: '',
  url: '',
};

class AlbumsForm extends Component {

  static propTypes = {
    addImage: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ albumId: this.props.match.params.albumId }, () => {
      this.props.addImage(this.state);
      this.setState(defaultState);
    });
  };

  render() {
    const { title, description, url } = this.state;

    return (      
      <div>
        <h1>Add an Image:</h1>
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
          Image Url:
            <input name="url" value={url} onChange={this.handleChange} required/>
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addImage }
)(AlbumsForm);