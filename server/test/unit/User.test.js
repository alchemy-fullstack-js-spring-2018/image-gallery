const { assert } = require('chai');
const { getErrors } = require('./helpers');
const User = require('../../lib/models/User');

describe('User model', () => {
    
    it('Valid and Very Good Model', () => {

        const data = {
            name: 'Mr.Bigboy',
            email: 'Business@BusinessTime.com',
            hash: 'BusinessSocks'
        };
        
        const user = new User(data);
        data._id = user._id;
        assert.deepEqual(user.toJSON(), data);
        assert.isUndefined(user.validateSync());
    });

    it('requires name, email, and password', () => {
        const user = new User({});
        const errors = getErrors(user.validateSync(), 3);
        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.email.kind, 'required');
        assert.equal(errors.hash.kind, 'required');
    });
});
