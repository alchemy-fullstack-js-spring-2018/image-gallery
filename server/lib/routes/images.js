const router = require('express').Router(); /* eslint-disable-line */
const { getParam, respond } = require('./route-helpers');
const Image = require('../models/Image');

module.exports = router

    .param('id', getParam)

    .get('/thumbnail', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .get('/gallery', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .get('/list', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .post('/new', respond(
        ({ body }) => {
            return Image.create(body);
        }
    ))

    .delete('/:id', respond(
        ({ id }) => {
            return Image.findByIdAndRemove(id);
        }
    ));