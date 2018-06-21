import { LOADING_START, LOADING_END, ERROR } from '../components/app/reducers';

const isPromise = val => val && typeof val.then === 'function';

export const promiseMiddleware = ({ dispatch }) => next => action => {

  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);

  dispatch({ type: LOADING_START });

  payload
    .then(
      result => {
        dispatch({
          type,
          payload: result
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      }
    )
    .then(() => {
      dispatch({ type: LOADING_END });
    });
};