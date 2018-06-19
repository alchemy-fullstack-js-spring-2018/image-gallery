const { assert } = require('chai');
const User = require('../../lib/models/User');

describe('User model', () => {
    it('valid and good model', () => {
        const data = {
            username: 'Don Juan John Sean',
            email: 'me@you.com'
        };

        const don = new User(data);
        data._id = don._id;
        assert.deepEqual(don.toJSON(), data);
    });

    it('username and email required', () => {
        const user = new User({});
        const errors = user.validateSync();
        assert.equal(errors.errors.username.path, 'username');
        assert.equal(errors.errors.username.kind, 'required');
        assert.equal(errors.errors.email.path, 'email');
        assert.equal(errors.errors.email.kind, 'required');
    });
});