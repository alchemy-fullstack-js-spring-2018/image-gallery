import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getAlbum } from '../../services/api';
// import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
// import { loadImages } from './actions';
// import { getImagesByAlbum } from './reducers';
import NewImage from './NewImage';
import ImagesThumbnail from './ImagesThumbnail';


export default class AlbumDetail extends PureComponent {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    // loadImages: PropTypes.func.isRequired,
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
    // this.props.loadImages(this.props.albumId);
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
          {description}
          <Link to={`${url}/new`}>New Image</Link>
          <Link to={`${url}/thumbnail`}>Thumbnail</Link>
        </div>
        <div>
          <Switch>
            <Route path={`${url}/new`} render={() => {
              return <NewImage albumId={albumId}/>;
            }}/>
            <Route path={`${url}/thumbnail`} render={() => {
              return <ImagesThumbnail albumId={albumId}/>;
            }}/>
            {/* <Redirect to={`${url}`}/> */}

          </Switch>
        </div>
      </section>
    );
  }
}

// export default connect(
//   state => ({ images: getImagesByAlbum(state) }),
//   { loadImages }
// )(AlbumDetail);