import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { albumList, albumById, imagesByAlbum } from '../components/reducers';
import { user, checkedAuth } from '../components/Auth/reducers';

const rootReducer = combineReducers({
  albumById,
  albumList,
  imagesByAlbum,
  user,
  checkedAuth
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