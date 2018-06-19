import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getAlbum } from '../../services/api';
import { Switch, Route, Link } from 'react-router-dom';
import NewImage from './NewImage';
import ImagesThumbnail from './ImagesThumbnail';
import ImagesList from './ImagesList';


export default class AlbumDetail extends PureComponent {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    match: PropTypes.object,
  };

  state = {
    title: null,
    description: null,
    posterImage: null
  };

  componentDidMount() {
    getAlbum(this.props.albumId)
      .then(album => this.setState({ title: album.title, description: album.description, posterImage: album.posterImage }));
  }

  render() {
    const { title, description, posterImage } = this.state;
    const { match, albumId } = this.props;
    const { url } = match;
    
    if(!this.state.title) return (<h1>Bad Album ID</h1>);

    return (
      <section>
        <div>
          {title} <br/>
          <img src={posterImage}/> <br/>
          {description}<br />
          <Link to={`${url}/new`}>New Image</Link>&nbsp;
          <Link to={`${url}/thumbnail`}>Thumbnail</Link>
          <Link to={`${url}/list`}>List</Link>
        </div>
        <div>
          <Switch>
            <Route path={`${url}/new`} render={({ history }) => {
              return <NewImage albumId={albumId} history={history}/>;
            }}/>
            <Route path={`${url}/thumbnail`} render={() => {
              return <ImagesThumbnail albumId={albumId}/>;
            }}/>
            <Route path={`${url}/list`} render={() => {
              return <ImagesList albumId={albumId}/>;
            }}/>
          </Switch>
        </div>
      </section>
    );
  }
}