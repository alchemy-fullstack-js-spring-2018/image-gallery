import { USER_AUTH, LOGOUT, CHECKED_AUTH } from './reducers';
import { verifyUser } from '../../services/db';
import { getStoredUser, clearStoredUser } from '../../services/request';

import { 
  signup as signupApi, 
  signin as signinApi
} from '../../services/db';

const makeAuth = db => credentials => ({
  type: USER_AUTH,
  payload: db(credentials)
});

export const signup = makeAuth(signupApi);
export const signin = makeAuth(signinApi); 
export const logout = () => ({ type: LOGOUT });

const authChecked = () => ({ type: CHECKED_AUTH });

export const tryLoadUser = () => dispatch => {
  const user = getStoredUser();
  if(!user || !user.token) {
    return dispatch(authChecked());
  }

  verifyUser(user.token)
    .then(() => dispatch({
      type: USER_AUTH,
      payload: user
    }))
    .catch(() => {
      clearStoredUser();
    })
    .then(() => {
      dispatch(authChecked());
    });
};