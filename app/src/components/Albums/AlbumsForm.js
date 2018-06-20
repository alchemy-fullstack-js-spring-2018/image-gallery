import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addAlbum } from '../actions';
import { connect } from 'react-redux';
import FormControl from '../shared/FormControl';

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
          <FormControl label="title">
            <input name="title" value={title} onChange={this.handleChange}/>
          </FormControl>
          
          <FormControl label="description">
            <input name="description" value={description} onChange={this.handleChange}/>
          </FormControl>
          
          <FormControl label="coverImage">
            <input name="coverImage" value={coverImage} onChange={this.handleChange}/>
          </FormControl>
          

          <button>create</button>

        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addAlbum }
)(AlbumsForm);