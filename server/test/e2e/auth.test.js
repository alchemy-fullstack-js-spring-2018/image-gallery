const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');
/* eslint no-console: off */

describe.only('Auth E2E API', () => {

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

    it.skip('signup', () => {
        assert.ok(token);
    });

    it.skip('verifies', () => {
        return request
            .get('/api/auth/verify')
            .set('Token', token)
            .then(({ body }) => {
                assert.isOk(body.verified);
            });
    });

    it.skip('signin', () => {
        return request
            .post('/api/auth/signin')
            .send({
                username: 'Julio Martinez',
                password: 'ilovedoingthings'
            })
            .then(({ body }) => {
                assert.ok(body.token);
            });
    });
});
