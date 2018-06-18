const router = require('express').Router();
const Album = require('../models/Album');
const Image = require('../models/Image');
const errorHandler = require('../utils/error-handler');

module.exports = router
  .get('/albums', (req, res) => {
    Album.find()
      .then(albums => res.json(albums))
      .catch(err => errorHandler(err, req, res));
  })
  .post('/albums', (req, res) => {
    const album = req.body;
    return new Album(album).save()
      .then(album => res.json(album))
      .catch(err => errorHandler(err, req, res));
  })
  .get('/albums/:id', (req, res) => {
    Album.findById(req.params.id)
      .lean()
      .then(album => res.json(album))
      .catch(err => errorHandler(err, req, res));
  })
  .get('/albums/:id/images', (req, res) => {
    return Image.findById({ albumId: req.params.id })
      .lean()
      .then(album => res.json(album))
      .catch(err => errorHandler(err, req, res));
  })
  .post('/albums/:id/images', (req, res) => {
    const image = req.body;
    image.albumId = req.params.id;
    return new Image(image).save()
      .then(image => res.json(image))
      .catch(err => errorHandler(err, req, res));
  })
  .delete('/albums/:id', (req, res) => {
    Album.findByIdAndRemove(req.params.id)
      .then(removed => res.json(removed))
      .catch(err => errorHandler(err, req, res));
  });