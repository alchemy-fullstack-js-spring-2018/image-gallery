import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import { connect } from 'react-redux';
import { addAlbums } from '../actions';
import AlbumsForm from './AlbumsForm';
import AlbumsList from './AlbumList';
import AlbumDetail from './AlbumDetail';

class Albums extends Component {

    static propTypes = {
      addAlbums: PropTypes.func.isRequired
    }

    handleAdd = album => {
      this.props.addAlbums(album);
    }
  
    render() {

      return (
        <div>
          <Switch>
            <Route exact path="/albums" component={AlbumsList}/>
            <Route path="/albums/new" render = {() => {
              return <AlbumsForm onAdd={this.handleAdd}/>;
            }}/>
            <Route path="/albums/:albumId" component={AlbumDetail}/>
            <Redirect to="/albums"/>
          </Switch>
        </div>
      );
    }
}

export default connect(
  null,
  { addAlbums }
)(Albums);