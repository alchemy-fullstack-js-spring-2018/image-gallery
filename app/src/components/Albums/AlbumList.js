import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadAlbums, addAlbum } from './actions';
import { getAlbumsList } from './reducers';
import AlbumItem from './AlbumItem';
import AlbumsForm from './AlbumsForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import { connect } from 'react-redux';
import './AlbumList.less';

class AlbumList extends Component {
    
    static propTypes = {
      albums: PropTypes.array,
      loadAlbums: PropTypes.func.isRequired,
      addAlbum: PropTypes.func
    };

    componentDidMount(){
      this.props.loadAlbums();
    }

    render() {
      const { albums } = this.props;
  
      return (
        <section id="album-gallery">
          <div id="add-album">
            <h2>Albums
              <Link to={'/albums/new'}>
                <button>+</button>
              </Link>
            </h2>
          </div>
          <ul>
            {albums ? albums.map((album, i) => <AlbumItem key={i} album={album}/>) : null}
          </ul>
          <Route path="/albums/new" render={() => <AlbumsForm />}/> 
        </section>
      );
    }
}

export default connect(
  state => ({ albums: getAlbumsList(state) }),
  { loadAlbums, addAlbum }
)(AlbumList);
