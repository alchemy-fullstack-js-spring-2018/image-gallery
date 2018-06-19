import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { albums, images } from '../src/components/albums/reducers';
import { user, checkedAuth } from '../src/components/auth/reducers';

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
    applyMiddleware(thunk)
  )
);

export default store;