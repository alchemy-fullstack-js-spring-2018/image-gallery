import {
  user, getUser,
  USER_AUTH, LOGOUT } from './reducers';

describe('User Reducer', () => {

  it('Initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('Loads User', () => {
    const data = { name: 'user' };
    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toEqual(data);
  });

  it('Clears User on Logout', () => {
    const state = user({}, { type: LOGOUT });
    expect(state).toBe(null);
  });

  it('Gets User from State', () => {
    const user = {};
    expect(getUser({ user })).toBe(user);
  });

});