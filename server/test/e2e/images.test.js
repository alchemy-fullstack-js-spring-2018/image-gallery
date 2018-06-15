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

    const getListFields = ({ _id, albumId, title, description }) => ({ _id, albumId, title, description });

    before(() => dropCollection('albums'));
    before(() => dropCollection('images')); 

    before(() => {
        return request.post('/api/albums/new')
            .send(album)
            .then(({ body }) => { 
                album = body; 
                image1.albumId = body._id;
                image2.albumId = body._id;
            });
    });

    it('uploads an image', () => {
        return request.post(`/api/images/${image1.albumId}/new`)
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

    it('gets all image and all data', () => {
        return request.post(`/api/images/${image2.albumId}/new`)
            .send(image2)
            .then(checkOk)
            .then(({ body }) => {
                image2 = body;
                request.get(`/api/images/${image2.albumId}`)
                    .then(checkOk)
                    .then(({ body }) => {
                        assert.deepEqual(body, [image1, image2]);
                    });
            });
    });

    it('gets all image and list data', () => {
        return request.get(`/api/images/${image2.albumId}/list`)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [image1, image2].map(getListFields));
            });
    });

    it('updates an image', () => {
        image1 = { 
            ...image1, 
            description: 'Bob is kind of a creep',
        };
        
        return request.put(`/api/images/${image1.albumId}/${image1._id}`)
            .send(image1)
            .then(({ body }) => {
                assert.deepEqual(body, image1);
            });
    });

    it('deletes an album', () => {
        return request.delete(`/api/images/${image1.albumId}/${image1._id}`)
            .then(() => {
                return Image.findById(image1._id);
            })
            .then(found => {
                assert.isNull(found);
            });
    });
});