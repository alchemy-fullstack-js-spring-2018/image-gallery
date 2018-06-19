const { assert } = require('chai');
const request = require('./request');
const Album = require('../../lib/models/Album');
const { dropCollection } = require('./db');
const { verify } = require('../../lib/auth/token-service');

describe.only('Album API', () => {
  before(() => dropCollection('albums'));
  before(() => dropCollection('users'));

  
  let album = {
    title:  'Dark Side of the Moon',
    description:  'Pink Floyd in Space',
    posterImage:  'https://i.imgur.com/H5hI3FV.jpg'
  };
  
  let image = {
    title:  'A cute bunny',
    description:  'Is cute bunny',
    url:  'fake url.com',
    albumId:  null,
  };
  
  let user = {
    name: 'user',
    email: 'user@user.com',
    password: '123'
  };

  let token = '';

  before(() => {
    return request.post('/api/auth/signup')
      .send(user)
      .then(({ body }) => {
        token = body.token;
        user._id = verify(body.token).id;
      });
  });
  
  it('Saves and retrieves an album', () => {
    return request.post('/api/albums')
      .set('Authorization', token)
      .send(album)
      .then(({ body }) => {
        const { _id, __v } = body;
        assert.ok(_id);
        assert.equal(__v, 0);
        assert.deepEqual(body, {
          _id, __v,
          ...album 
        });
        album = body;
      });
  });

  it('Gets an album by id', () => {
    return request.get(`/api/albums/${album._id}`)
      .then(({ body }) => {
        assert.deepEqual(body, album);
      });
  });

  it('Gets all albums', () => {
    return request.get('/api/albums')
      .then(({ body }) => {
        assert.deepEqual(body[0], album);
      });
  });
    
  it('Saves an image', () => {
    return request.post(`/api/albums/${album._id}/images`)
      .set('Authorization', token)
      .send(image)
      .then(({ body }) => {
        image.albumId = album._id;
        const { _id, __v } = body;
        assert.ok(_id);
        assert.equal(__v, 0);
        assert.deepEqual(body, {
          _id, __v,
          ...image
        });
        image = body;
      });
  });

  it('Retrieves all images by album id', () => {
    return request.get(`/api/albums/${album._id}/images`)
      .then(({ body }) => {
        assert.deepEqual(body[0], image);
      });
  });

  it('Deletes an album', () => {
    return request.delete(`/api/albums/${album._id}`)
      .set('Authorization', token)
      .then(() => {
        return Album.findById(album._id);
      })
      .then(found => {
        assert.isNull(found);
      });
  });
});