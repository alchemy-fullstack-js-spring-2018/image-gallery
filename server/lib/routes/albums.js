const router = require('express').Router();
const Album = require('../models/Album');
const { getParam, respond } = require('./route-helpers');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Album.create(body)
    ))
    
    .get('/', respond(
        ({ query }) => Album.findByQuery(query)
    ))
    
    .get('/:id', respond(
        ({ id }) => Album.getDetailById(id)
    ));