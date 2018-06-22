const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');
const Image = require('../../lib/models/Image');
/* eslint no-console: off */

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

    let image3 = {
        albumId: null,
        title: 'The Prado',
        description: 'Fuck yeah, art the Prado',
        url: 'http://images.com/spain2.png',
    };

    let album1 = {
        title: 'Spain Trip',
        description: 'This one time I went to Spain',
        coverImage: 'http://images.com/spain.png'
    };

    let album2 = {
        title: 'France Trip',
        description: 'This other time I went to France',
        coverImage: 'http://images.com/france.png'
    };

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    before(() => dropCollection('albums'));
    before(() => dropCollection('images')); 
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

    before(() => {
        return request.post('/api/albums/new')
            .set('Token', token)
            .send(album1)
            .then(({ body }) => { 
                album1 = body; 
                image1.albumId = body._id;
                image2.albumId = body._id;
                return request.post('/api/albums/new')
                    .set('Token', token)
                    .send(album2);
            })
            .then(({ body }) => { 
                album2 = body;
                image3.albumId = body.__id; 
            });
    });

    it('uploads an image', () => {
        return request.post('/api/images/new')
            .send(image1)
            .set('Token', token)
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

    it('gets all image and all data, only from correct album', () => {
        return request.post('/api/images/new')
            .set('Token', token)
            .send(image2)
            .then(checkOk)
            .then(({ body }) => {
                image2 = body;
                return request.post('/images/new')
                    .send(image3)
                    .set('Token', token);
            })
            .then(checkOk)
            .then (() => {
                return request.get(`/api/images/${image2.albumId}`)
                    .set('Token', token);
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [image1, image2]);
            });
    });

    it('updates an image', () => {
        image1 = { 
            ...image1, 
            description: 'Bob is kind of a creep',
        };
        
        return request.put(`/api/images/${image1._id}`)
            .set('Token', token)
            .send(image1)
            .then(({ body }) => {
                assert.deepEqual(body, image1);
            });
    });

    it('deletes an album', () => {
        return request.delete(`/api/images/${image1._id}`)
            .set('Token', token)
            .then(() => {
                return Image.findById(image1._id);
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