import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { albumList, albumById } from '../components/Albums/reducers';
import { imagesByAlbum } from '../components/Images/reducers';
import { user, checkedAuth } from '../components/Auth/reducers';

const rootReducer = combineReducers({
  user,
  checkedAuth,
  albumById,
  albumList,
  imagesByAlbum,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;