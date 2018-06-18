import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { getAlbums } from './reducers';
import { loadAlbums, addAlbum } from './actions';
import styles from './Albums.css';
import AddAlbum from './AddAlbum';

class Albums extends PureComponent {
  static propTypes = {
    albums: PropTypes.array,
    loadAlbums: PropTypes.func.isRequired,
    addAlbum: PropTypes.func.isRequired
  };

  state = {
    formOpen: false,
    title: '',
    description: ''
  };

  handleFormToggle = () => {
    this.setState(prevState => ({ formOpen: !prevState.formOpen }));
  };

  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;
    const { formOpen } = this.state;

    return (
      <ul className={styles.albums}>
        {formOpen ? <li className="form"><AddAlbum onDone={this.handleFormToggle}/></li> : <li><div className="new-album" onClick={this.handleFormToggle}>+</div></li>}
        {albums.map(album => <li key={album._id}><div className="each-album"><Link to={`/albums/${album._id}`}>{album.title}</Link></div></li>)}
      </ul>
    );
  }
}

export default connect(
  state => ({
    albums: getAlbums(state)
  }),
  { loadAlbums, addAlbum }
)(Albums);