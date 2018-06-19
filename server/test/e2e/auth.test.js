const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.only('Auth Test', () => {

    before(() => dropCollection('users'));

    let token = null;

    before(() => {
        return request
            .post('/api/auth/signup')
            .send({
                name: 'Jerry Smith',
                email: 'me@ma.com',
                password: 'gotapples'
            })
            .then(({ body }) => token = body.token);
    });

    it('signup', () => {
        assert.ok(token);
    });

    it('verifies', () => {
        return request
            .get('/api/auth/verify')
            .set('Authorization', token)
            .then(({ body }) => {
                assert.isOk(body.verified);
            });
    });

    
    it('signin', () => {
        return request
            .post('/api/auth/signin')
            .send({
                name: 'Jerry Smith',
                email: 'me@ma.com',
                password: 'gotapples'
            })
            .then(({ body }) => {
                assert.ok(body.token);
            });
    });
});