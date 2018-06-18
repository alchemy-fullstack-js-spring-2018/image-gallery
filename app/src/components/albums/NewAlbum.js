import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbums } from './reducers';
import { addAlbum } from './actions';
import styles from './NewAlbum.css';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  description: '',
  posterImage: ''
};

class NewAlbum extends Component {
  static propTypes = {
    albums: PropTypes.array,
    addAlbum: PropTypes.func.isRequired
  };

  state = {
    form: defaultState
  };

  handleChange = ({ target }) => {
    this.setState(({ form }) => {
      return {
        form: {
          ...form,
          [target.name]: target.value
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAlbum(this.state.form);
  };

  render() {

    const { title, description, posterImage } = this.state.form;
    
    return (
      <div className={styles.newAlbum}>
        <h3>Create a New Album:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={this.handleChange}/>
          <label>Link to Poster Image:</label>
          <input type="text" name="posterImage" value={posterImage} onChange={this.handleChange}/>
          <label>Description:</label>
          <textarea name="description" value={description} onChange={this.handleChange}/>
          <button type="submit">Create your Album</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({ albums: getAlbums(state) }),
  { addAlbum }
)(NewAlbum);