const { assert } = require('chai');
const request = require('./request');
/* eslint no-console: off */
const { dropCollection } = require('./db');

describe('Auth E2E API', () => {

    before(() => dropCollection('users'));

    let token = null;

    before(() => {
        return request
            .post('/api/auth/signup')
            .send({
                username: 'Don Juan John Sean',
                email: 'me@you.com',
                password: 'frogs',
            })
            .then(({ body }) => token = body.token)
            .catch(error => console.error(error));
    });

    it('signup', () => {
        assert.ok(token);
    });

    it('verifies', () => {
        return request
            .get('/api/auth/verify')
            .set('Token', token)
            .then(({ body }) => {
                assert.isOk(body.verified);
            });
    });

    it('signin', () => {
        return request
            .post('/api/auth/signin')
            .send({
                email: 'me@you.com',
                password: 'frogs',
            })
            .then(({ body }) => {
                assert.ok(body.token);
            });
    });
});
