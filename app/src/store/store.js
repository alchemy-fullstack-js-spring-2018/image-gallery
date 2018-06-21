import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { albums, images } from '../components/albums/reducers';
import { user, checkedAuth } from '../components/auth/reducers';
import promiseMiddleware from './promise-middleware';

const rootReducer = combineReducers({
  albums,
  images,
  user,
  checkedAuth,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    ),
  )
);

export default store;