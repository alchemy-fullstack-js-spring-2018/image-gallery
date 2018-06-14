import { albums, ALBUMS_SHOW, ALBUMS_ADD } from './reducer';

it('has a default value of empty array', () => {
  const state = albums(undefined, {});
  expect(state).toEqual([]);
});