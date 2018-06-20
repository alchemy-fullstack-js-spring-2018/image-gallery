import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { albums, images } from '../../src/components/albums/reducers';
import { user, checkedAuth } from '../../src/components/auth/reducers';
import { promiseMiddleware } from './promise-mw';

const rootReducer = combineReducers({
  albums,
  images,
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