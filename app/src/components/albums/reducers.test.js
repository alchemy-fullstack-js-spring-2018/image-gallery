import { albums } from './reducers';

describe.only('Album Reducers', () => {

  it('Returns an empty array for default state', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  
});