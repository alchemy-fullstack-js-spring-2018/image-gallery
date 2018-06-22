import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addAlbum } from '../Albums/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <div className="modal-outer">
        <section className="modal-inner">
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
            <Link to={'/albums'}><button type="close">Cancel</button></Link>
          </form>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  { addAlbum }
)(AlbumsForm);