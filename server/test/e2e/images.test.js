const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');
const Image = require('../../lib/models/Image');

describe('Image E2E API', () => {

    let image1 = {
        albumId: null,
        title: 'At the Beach',
        description: 'On a beach in Spain with Bob',
        url: 'http://images.com/spain.png',
    };

    let image2 = {
        albumId: null,
        title: 'The Prado',
        description: 'Fuck yeah, art the Prado',
        url: 'http://images.com/spain2.png',
    };

    let album = {
        title: 'Spain Trip',
        description: 'This one time I went to Spain',
        coverImage: 'http://images.com/spain.png'
    };

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    before(() => dropCollection('albums'));
    before(() => dropCollection('images')); 

    before(() => {
        return request.post('/albums/new')
            .send(album)
            .then(({ body }) => { 
                album = body; 
                image1.albumId = body._id;
                image2.albumId = body._id;
            });
    });

    it.only('uploads an image', () => {
        return request.post(`/albums/${image1.albumId}/images/new`)
            .send(image1)
            .then(checkOk)
            .then(( {body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    _id, __v,
                    ...image1
                });
                image1 = body;
            });
    });

    it('gets all albums', () => {
        return request.post('/albums/new')
            .send(france)
            .then(checkOk)
            .then(( {body }) => {
                france = body;
                request.get('/albums')
                    .then(checkOk)
                    .then(({ body }) => {
                        assert.deepEqual(body, [spain, france]);
                    });
            });
    });

    it('gets an album by id', () => {
        return request.get(`/albums/${france._id}`)
            .then(({ body }) => {
                assert.deepEqual(body._id, france._id);
            });
    });

    it('updates an album', () => {
        france = { 
            ...france, 
            description: 'I got sick here, terrible trip'
        };
        
        return request.put(`/albums/${france._id}`)
            .send(france)
            .then(({ body }) => {
                assert.deepEqual(body, france);
            });
    });

    it('deletes an album', () => {
        return request.delete(`/albums/${france._id}`)
            .then(() => {
                return Album.findById(france._id);
            })
            .then(found => {
                assert.isNull(found);
            });
    });
});