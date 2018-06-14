const router = require('express').Router(); /* eslint-disable-line */
const { getParam, respond } = require('./route-helpers');
const Album = require('../models/Album');

module.exports = router

    .param('id', getParam)

    .get('/', respond(
        ({ query }) => {
            return Album.find(query)
                .lean();
        }
    ))
    
    .get('/:id', respond(
        ({ id }) => {
            return Album.findById(id)
                .lean();
        }
    ))
    
    .post('/new', respond(
        ({ body }) => {
            return Album.create(body);
        }
    ))

    .put('/:id', respond(
        ({ body, id }) => {
            return Album.findByIdAndUpdate(id, body, { new: true});
        }
    ))
    
    .delete('/:id', respond(
        ({ id }) => {
            return Album.findByIdAndRemove(id);
        }
    ));