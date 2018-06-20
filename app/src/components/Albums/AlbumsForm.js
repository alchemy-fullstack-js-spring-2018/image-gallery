import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addAlbum } from '../Albums/actions';
import { connect } from 'react-redux';


const defaultState = {
  id: '',
  title: '',
  description: '',
  coverImage: '',
};

class AlbumsForm extends Component {

  static propTypes = {
    addAlbum: PropTypes.func.isRequired,
  };

  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addAlbum(this.state);
    this.setState(defaultState);
  };

  render() {
    const { title, description, coverImage } = this.state;

    return (
      <div>
        <h1>New Album:</h1>
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
          Cover:
            <input name="coverImage" value={coverImage} onChange={this.handleChange} required/>
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addAlbum }
)(AlbumsForm);