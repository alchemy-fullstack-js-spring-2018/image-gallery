const { assert } = require('chai');
const mongoose = require('mongoose');
mongoose.models = {};
const User = require('../../lib/models/User');

describe('User model test', () => {
  it('Valid good model', () => {

    const data = {
      name: 'henry',
      email: 'henry@henry.com',
    };

    const user = new User(data);
    data._id = user._id;

    assert.deepEqual(user.toJSON(), data);
  });
  
  it('generates hash and checks password', () => {
    const data = {
      name: 'henry',
      email: 'henry@henry.com',
    };

    const password = '123';
    
    const henry = new User(data);
    data._id = henry._id;
    
    assert.deepEqual(henry.toJSON(), data);

    henry.generateHash(password);
    assert.ok(henry.hash);
    assert.notEqual(henry.hash, password);

    assert.isOk(henry.comparePassword(password));
    
  });

});