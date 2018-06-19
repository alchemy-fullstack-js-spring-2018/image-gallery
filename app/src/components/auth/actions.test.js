describe.skip('User Actions', () => {

  it('Initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

});