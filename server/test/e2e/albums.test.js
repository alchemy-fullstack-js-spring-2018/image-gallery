/* eslint no-console: off */
const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');
const Album = require('../../lib/models/Album');

describe('Album E2E API', () => {

    let spain = {
        title: 'Spain Trip',
        description: 'This one time I went to Spain',
        coverImage: 'http://images.com/spain.png'
    };

    let france = {
        title: 'France Trip',
        description: 'This other time I went to France',
        coverImage: 'http://images.com/france.png'
    };

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    const getListFields = ({ _id, title, coverImage }) => ({ _id, title, coverImage });

    before(() => dropCollection('albums'));
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

    it('adds an album', () => {
        return request.post('/api/albums/new')
            .set('Token', token)
            .send(spain)
            .then(checkOk)
            .then(( {body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    _id, __v,
                    ...spain
                });
                spain = body;
            });
    });

    it('gets all albums', () => {
        return request.post('/api/albums/new')
            .set('Token', token)
            .send(france)
            .then(checkOk)
            .then(( {body }) => {
                france = body;
                return request.get('/api/albums')
                    .set('Token', token);
            })
            .then(checkOk)
            .then(({ body }) => {
                return assert.deepEqual(body, [spain, france].map(getListFields));
            });
    });

    it('gets an album by id', () => {
        return request.get(`/api/albums/${france._id}`)
            .set('Token', token)
            .then(({ body }) => {
                assert.deepEqual(body._id, france._id);
            });
    });

    it('updates an album', () => {
        france = { 
            ...france, 
            description: 'I got sick here, terrible trip'
        };
        
        return request.put(`/api/albums/${france._id}`)
            .set('Token', token)
            .send(france)
            .then(({ body }) => {
                assert.deepEqual(body, france);
            });
    });

    it('deletes an album', () => {
        return request.delete(`/api/albums/${france._id}`)
            .set('Token', token)
            .then(() => {
                return Album.findById(france._id);
            })
            .then(found => {
                assert.isNull(found);
            });
    });

    it('returns unauthorized when not signed in', () => {
        return request.get('/api/albums')
            .catch(err => { 
                assert.equal(err, 'Error: Unauthorized');
            });
    });
});