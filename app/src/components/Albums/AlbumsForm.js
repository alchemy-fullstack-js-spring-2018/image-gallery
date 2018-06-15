import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  id: '',
  title: '',
  description: ''
};

export default class AlbumsForm extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState(defaultState);
  };

  render() {
    const { title, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input name="title" value={title} onChange={this.handleChange}/>
        </label>
        <label>
          Description:
          <input name="description" value={description} onChange={this.handleChange}/>
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}