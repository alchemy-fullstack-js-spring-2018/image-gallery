import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAlbums } from '../action';
import AlbumsForm from './AlbumsForm';
import AlbumsList from './AlbumList';

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
          <Router>
            <Switch>
              <Route exact path="/albums" component={AlbumsList}/>
              <Route path="/albums/new" render = {() => {
                return <AlbumsForm onAdd={this.handleAdd}/>;
              }}/>
              <Redirect to="/"/>
            </Switch>
          </Router>
        </div>
      );
    }
}

export default connect(
  null,
  { addAlbums }
)(Albums);