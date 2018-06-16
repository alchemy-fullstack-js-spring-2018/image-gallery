import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { getAlbums } from './reducers';
import { loadAlbums, addAlbum } from './actions';

class Albums extends Component {
  static propTypes = {
    albums: PropTypes.array,
    loadAlbums: PropTypes.func.isRequired,
    addAlbum: PropTypes.func.isRequired
  };

  state = {
    title: '',
    description: ''
  };

  componentDidMount() {
    this.props.loadAlbums();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAlbum(this.state);
    this.setState({ title: '', description: '' });
  };

  render() {
    const { albums } = this.props;
    const { title, description } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Add an album:</legend>
            <label>title<input type="text" value={title} onChange={({ target }) => this.setState({ title: target.value })}/></label>
            <label>description<input type="text" value={description} onChange={({ target }) => this.setState({ description: target.value })}/></label>
            <button type="submit">ADD</button>
          </fieldset>
        </form>
        <ul>
          {albums.map(album => <li key={album._id}><Link to={`/albums/${album._id}`}>{album.title}</Link></li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    albums: getAlbums(state)
  }),
  { loadAlbums, addAlbum }
)(Albums);