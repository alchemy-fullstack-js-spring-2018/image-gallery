const router = require('express').Router();
const Image = require('../models/Image');
const errorHandler = require('../utils/error-handler');

module.exports = router
  .get('/', (req, res) => {
    Image.find()
      .then(images => res.json(images))
      .catch(err => errorHandler(err, req, res));
  });