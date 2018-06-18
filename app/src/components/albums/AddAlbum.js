import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAlbum } from './actions';
import styles from './AddAlbum.css';

class AddAlbum extends PureComponent {
  static propTypes = {
    onDone: PropTypes.func.isRequired,
    addAlbum: PropTypes.func.isRequired
  };

  state = {
    title: '',
    description: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAlbum(this.state);
    this.setState({
      title: '',
      description: ''
    });
    this.props.onDone();
  };

  render() {
    const { title, description } = this.state;
    const { onDone } = this.props;

    return (
      <form className={styles['add-album']} onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="title"/>
        <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="description"/>
        <button type="submit">ADD ALBUM</button>
        <button type="button" onClick={onDone}>cancel</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addAlbum }
)(AddAlbum);