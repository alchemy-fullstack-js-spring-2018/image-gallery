import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; //eslint-disable-line
import ImagesForm from './ImagesForm';

export default class Albums extends Component {
  
  render() {

    return (
      <div>
        <Switch>
          <Route path="/albums/:albumId/images/new" component={ImagesForm}/>
        </Switch>
      </div>
    );
  }
}

