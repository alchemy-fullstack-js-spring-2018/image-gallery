const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('albums API', () => {

    before(() => dropCollection('albums'));
    before(() => dropCollection('images'));

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    let album1 = {
        title: 'title1',
        description: 'des1',
        posterImage: {}
    };

    let album2 = {
        title: 'title2',
        description: 'des2',
        posterImage: {}
    };

    let image1 = {
        albumId: [],
        title: 'image1',
        description: 'des1',
        url: 'url1'
    };

    before(() => {
        return request.post('/api/images') 
            .send(image1)
            .then(({ body }) => {
                image1 = body;
            });
    });

    it('posts an album to the db', () => {
        album1.posterImage._id = image1._id;
        return request.post('/api/albums')
            .send(album1)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body.title, album1.title);
                album1 = body;
            });
    });

    it('get all albums', () => {
        album2.posterImage._id = image1._id;
        return request.post('/api/albums')
            .send(album2)
            .then(checkOk)
            .then(({ body }) => {
                album2 = body;
                return request.get('/api/albums');
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [album1, album2]);
            });
    });

});