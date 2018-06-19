import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Albums from '../albums/Albums';
import About from '../about/About';
import AlbumDetail from '../albums/AlbumDetail';
import NewAlbum from '../albums/NewAlbum';
import Auth from '../auth/Auth';
import Header from './Header';
import './App.css';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <Router>
        <div className = "grid-class">
          <Link to= "/"><img src={require('../../assets/Logo2.png')} id="logo"/></Link>
          <Header className="header"/>
          <nav className = "nav-bar">
            <ul>
              <li><Link to= "/">Albums</Link></li>
              <li><Link to="/albums/new">Add Albums</Link></li>
              <li><a>Images</a></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <main className = "main-area">
            { checkedAuth && 
            <Switch>
              <PrivateRoute exact path="/" component={Albums}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/about" component={About}/>
              <PrivateRoute exact path="/albums" component={Albums}/>
              <PrivateRoute path="/albums/new" component={NewAlbum}/>
              <PrivateRoute path="/albums/:id" render={({ match }) => {
                return <AlbumDetail albumId={match.params.id} match={match}/>;
              }}/>
              <Redirect to="/"/>
            </Switch>}
          </main>
          <footer className = "foot"><p id = "foot-type">&copy; 2018 Manro and Lonergan Gallery.</p></footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);