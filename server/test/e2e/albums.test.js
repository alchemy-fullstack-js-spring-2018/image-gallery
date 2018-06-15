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

    before(() => dropCollection('albums'));

    it('adds an album', () => {
        return request.post('/api/albums/new')
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
            .send(france)
            .then(checkOk)
            .then(( {body }) => {
                france = body;
                request.get('/api/albums')
                    .then(checkOk)
                    .then(({ body }) => {
                        assert.deepEqual(body, [spain, france]);
                    });
            });
    });

    it('gets an album by id', () => {
        return request.get(`/api/albums/${france._id}`)
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
            .send(france)
            .then(({ body }) => {
                assert.deepEqual(body, france);
            });
    });

    it('deletes an album', () => {
        return request.delete(`/api/albums/${france._id}`)
            .then(() => {
                return Album.findById(france._id);
            })
            .then(found => {
                assert.isNull(found);
            });
    });
});