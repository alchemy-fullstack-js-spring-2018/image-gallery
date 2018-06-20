const router = require('express').Router();
const Album = require('../models/Album');
const Image = require('../models/Image');
const errorHandler = require('../utils/error-handler');
const ensureAuth = require('../auth/ensure-auth')();

module.exports = router
  .get('/albums', (req, res) => {
    Album.find()
      .then(albums => res.json(albums))
      .catch(err => errorHandler(err, req, res));
  })
  .post('/albums', ensureAuth, (req, res) => {
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
    return Image.find({ albumId: req.params.id })
      .lean()
      .then(images => {
        res.json(images);
      })
      .catch(err => errorHandler(err, req, res));
  })
  .post('/albums/:id/images', ensureAuth, (req, res) => {
    const image = req.body;
    image.albumId = req.params.id;
    return new Image(image).save()
      .then(image => res.json(image))
      .catch(err => errorHandler(err, req, res));
  })
  .delete('/albums/:id', ensureAuth, (req, res) => {
    Album.findByIdAndRemove(req.params.id)
      .then(removed => res.json(removed))
      .catch(err => errorHandler(err, req, res));
  });