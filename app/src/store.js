import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { albums, images } from '../src/components/albums/reducers';
import { user, checkedAuth } from './components/auth/reducers';
import promiseMiddleware from './promise-middleware';
import { error, loading } from './components/app/reducers'; 

const rootReducer = combineReducers({
  error,
  loading,
  user,
  checkedAuth,
  albums,
  images
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