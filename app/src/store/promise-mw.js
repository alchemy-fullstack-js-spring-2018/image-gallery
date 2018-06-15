import { LOADING_START, LOADING_END, ERROR } from '../components/app/reducers';

const isPromise = val => val && typeof val.then === 'function';

export const promiseMiddleware = ({ dispatch }) => next => action => {
  
  // is the action payload a promise?
  // if not, call next and bail
  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);

  // yeah! a promise
  dispatch({ type: LOADING_START });

  payload
    .then(
      // success! dispatch same action but with result of promise
      result => {
        dispatch({
          type,
          payload: result
        });
      },
      // failure, set app error state
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      }
    )
    // cleanup time, set loading back to false
    .then(() => {
      dispatch({ type: LOADING_END });
    });

};