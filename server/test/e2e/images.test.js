const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('images API', () => {

    before(() => dropCollection('images'));

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    let image1 = {
        albumId: [],
        title: 'image1',
        description: 'des1',
        url: 'url1'
    };

    let image2 = {
        albumId: [],
        title: 'image2',
        description: 'des2',
        url: 'url2'
    };

    it('posts and image to the db', () => {
        return request.post('/api/images')
            .send(image1)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body.title, image1.title);
                image1 = body;
            });
    });

    it('get all images', () => {
        return request.post('/api/images')
            .send(image2)
            .then(checkOk)
            .then(({ body }) => {
                image2 = body;
                return request.get('/api/images');
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [image1, image2]);
            });
    });

});